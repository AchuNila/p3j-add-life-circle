import { ArrowLeft, MessageCircle } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { FadeUp, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { SafeImage } from '../components/SafeImage';
import { useRouter } from '../context/RouterContext';
import { BLOG_ARTICLES } from '../data/p3jContent';

interface BlogArticlePageProps {
  slug: string;
}

export function BlogArticlePage({ slug }: BlogArticlePageProps) {
  const { navigate, triggerWhatsApp, openBooking } = useRouter();
  const article = BLOG_ARTICLES.find((item) => item.slug === slug) || BLOG_ARTICLES[0];
  const related = BLOG_ARTICLES.filter((item) => item.slug !== article.slug);

  const articleUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/community/blog/${article.slug}`
      : `/community/blog/${article.slug}`;

  const shareText = `Namaste! I enjoyed reading "${article.title}" on P3J Add Life Circle and wanted to share it with you: ${articleUrl}`;

  const handleShare = () => {
    triggerWhatsApp({
      title: 'Share This Article on WhatsApp',
      message: shareText,
      isShare: true,
    });
  };

  return (
    <div>
      <article className="bg-[#FFFEFA] py-12 sm:py-16 border-b border-[#244B3B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate>
            <button
              type="button"
              onClick={() => navigate('/community')}
              className="group inline-flex items-center gap-2 text-base font-medium text-[#244B3B] hover:underline underline-offset-4 mb-8 min-h-[44px] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
              Back to Community Blogs & Videos
            </button>

            {/* Article Header */}
            <header className="max-w-[650px]">
              <p className="text-sm font-medium text-[#555D54] mb-3">
                {article.category} · {article.publishedLabel} · {article.readTime}
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#244B3B] leading-tight mb-5">
                {article.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#30362F] leading-relaxed mb-6">
                {article.excerpt}
              </p>

              {/* WhatsApp Share BEFORE Article Content */}
              <div className="py-4 border-t border-b border-[#244B3B]/12 flex flex-wrap items-center justify-between gap-4 mb-8">
                <span className="text-sm font-medium text-[#555D54]">
                  Share this essay with a friend or sister
                </span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-[#EBF0E6] text-[#244B3B] text-base font-medium hover:bg-[#DDE6D5] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Share on WhatsApp
                </button>
              </div>
            </header>
          </FadeUp>

          {/* Featured Image */}
          <FadeUp immediate delay={0.1}>
            <figure className="mb-10">
              <div className="rounded-2xl overflow-hidden border border-[#244B3B]/15 aspect-[16/10] bg-[#EBF0E6]">
                <SafeImage
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <figcaption className="mt-3 text-sm font-serif italic text-[#555D54]">
                {article.imageCaption}
              </figcaption>
            </figure>
          </FadeUp>

          {/* Readable 650px Left-Aligned Prose */}
          <FadeUp className="article-prose text-left">
            {article.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-[#244B3B] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}

            <div className="my-9 rounded-2xl bg-[#F8F5EC] border border-[#244B3B]/15 p-6">
              <p className="text-sm font-medium text-[#555D54] mb-1">
                For Quiet Reflection
              </p>
              <p className="font-serif italic text-xl text-[#244B3B] leading-relaxed">
                {article.reflectionPrompt}
              </p>
            </div>

            {/* WhatsApp Share AFTER Article Content */}
            <div className="mt-10 pt-6 border-t border-[#244B3B]/15 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif text-xl font-semibold text-[#244B3B]">
                  Did this resonate with you?
                </p>
                <p className="text-base text-[#555D54]">
                  Pass it along to someone in your circle on WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-[#244B3B] text-[#FFFEFA] text-base font-semibold hover:bg-[#1A382B] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Share on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="min-h-[48px] px-5 py-3 rounded-xl border border-[#244B3B]/30 text-[#244B3B] text-base font-medium hover:bg-[#EBF0E6] transition-colors cursor-pointer"
                >
                  Book a Free Intro Session
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </article>

      {/* Related Essays */}
      <section className="bg-[#F8F5EC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-serif text-3xl font-semibold text-[#244B3B] mb-8">
              More from the Community Library
            </h2>
          </FadeUp>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {related.map((item) => (
              <StaggerItem key={item.slug} className="flex">
                <BlogCard article={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
