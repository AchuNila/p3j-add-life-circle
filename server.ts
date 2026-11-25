import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

// Exact original spoken script — preserved verbatim
const WELCOME_SPEECH_TEXT =
  'Namaste, and a very warm welcome to P3J Add Life Circle — where we help one another live. ' +
  'We are a caring online community for women aged 55 and above to learn, share healthy practices, and grow older together from home. ' +
  'Our live 50-minute sessions take place in English on Google Meet every Monday at 10:00 AM IST, Wednesday at 10:00 AM IST, and Friday at 10:00 AM IST. ' +
  'Your initial intro session is completely free. Whenever you feel ready, we would love to welcome you into our circle.';

let cachedWelcomeWav: Buffer | null = null;
let inFlightAudioPromise: Promise<Buffer> | null = null;

function createGeminiClient(apiVersion?: string): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }
  return new GoogleGenAI({
    apiKey,
    ...(apiVersion ? { apiVersion } : {}),
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function generateWelcomeAudioWithRetry(attempts = 3): Promise<Buffer> {
  const ai = createGeminiClient('v1beta');
  let lastError: unknown;

  for (let i = 0; i < attempts; i++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: WELCOME_SPEECH_TEXT,
                speechMetadata: {
                  style:
                    'Warm, welcoming, calm, fluent and conversational Indian-friendly English narration, with natural breathing, smooth transitions between sentences, consistent gentle speaking speed and volume, clear pronunciation, and no exaggerated emotion.',
                },
              },
            ],
          },
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio =
        response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!base64Audio) {
        throw new Error('Gemini TTS did not return audio data.');
      }

      return Buffer.from(base64Audio, 'base64');
    } catch (err) {
      lastError = err;
      if (i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, 400 * (i + 1)));
      }
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error('Failed to generate welcome voice-over audio.');
}

async function getOrCreateWelcomeWav(): Promise<Buffer> {
  if (cachedWelcomeWav) {
    return cachedWelcomeWav;
  }
  if (!inFlightAudioPromise) {
    inFlightAudioPromise = generateWelcomeAudioWithRetry()
      .then((buf) => {
        cachedWelcomeWav = buf;
        return buf;
      })
      .finally(() => {
        inFlightAudioPromise = null;
      });
  }
  return inFlightAudioPromise;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  app.get('/api/welcome-audio', async (_req, res) => {
    try {
      const wavBuffer = await getOrCreateWelcomeWav();
      res.setHeader('Content-Type', 'audio/wav');
      res.setHeader('Content-Length', String(wavBuffer.length));
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.status(200).send(wavBuffer);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to generate welcome audio.';
      console.error('Error generating welcome audio:', message);
      res.status(500).json({ error: message });
    }
  });

  if (isProduction) {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`P3J server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
