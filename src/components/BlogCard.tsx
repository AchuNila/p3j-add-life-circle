import { ArrowRight, MessageCircle } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BlogArticle } from '../types';
import { SafeImage } from './SafeImage';

interface BlogCardProps {
  article: BlogArticle;
}

export function BlogCard({ article }: BlogCardProps) {
  const { navigate, triggerWhatsApp } = useRouter();

  const articleUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/community/blog/${article.slug}`
      : `/community/blog/${article.slug}`;

  const shareText = `I thought you might enjoy reading "${article.title}" from P3J Add Life Circle: ${articleUrl}`;

  return (
    <article className="group flex flex-col bg-[#FFFEFA] rounded-2xl border border-[#244B3B]/15 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#244B3B]/35 hover:shadow-[0_14px_30px_-12px_rgba(36,75,59,0.16)] h-full">
      <a
        href={`/community/blog/${article.slug}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/community/blog/${article.slug}`);
        }}
        className="block aspect-[4/3] overflow-hidden bg-[#EBF0E6]"
      >
        <SafeImage
          src={article.imageSrc}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          containerClassName="w-full h-full"
        />
      </a>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Zero-Pill Metadata */}
        <p className="text-sm text-[#555D54] font-medium mb-2.5">
          <span>{article.category}</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>{article.readTime}</span>
        </p>

        <h3 className="text-2xl font-serif font-semibold text-[#244B3B] leading-snug mb-3">
          <a
            href={`/community/blog/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/community/blog/${article.slug}`);
            }}
            className="hover:underline underline-offset-4 transition-colors duration-200"
          >
            {article.title}
          </a>
        </h3>

        <p className="text-base text-[#30362F] leading-relaxed mb-6 flex-1">
          {article.excerpt}
        </p>

        <div className="pt-4 border-t border-[#244B3B]/10 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`/community/blog/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/community/blog/${article.slug}`);
            }}
            className="inline-flex items-center gap-2 text-base font-semibold text-[#244B3B] hover:text-[#1A382B] min-h-[44px] transition-colors duration-200"
          >
            Read Article
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() =>
              triggerWhatsApp({
                title: 'Share Article via WhatsApp',
                message: shareText,
                isShare: true,
              })
            }
            aria-label={`Share ${article.title} on WhatsApp`}
            className="inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#244B3B]/20 text-sm font-medium text-[#244B3B] hover:bg-[#EBF0E6] transition-colors duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Share
          </button>
        </div>
      </div>
    </article>
  );
}
