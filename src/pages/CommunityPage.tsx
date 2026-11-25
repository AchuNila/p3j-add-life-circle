import { BlogCard } from '../components/BlogCard';
import { FadeUp, StaggerGroup, StaggerItem } from '../components/MotionPrimitives';
import { ShortVideoCarousel } from '../components/ShortVideoCarousel';
import { BLOG_ARTICLES } from '../data/p3jContent';

export function CommunityPage() {
  return (
    <div>
      {/* Editorial Header */}
      <section className="bg-[#F8F5EC] py-8 sm:py-10 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp immediate className="max-w-3xl">
            <p className="text-sm font-medium text-[#555D54] mb-1.5">
              Editorial Resource Library · Women 55+
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B] mb-2.5">
              Community Blogs & Videos
            </h1>
            <p className="text-base sm:text-lg text-[#30362F] leading-relaxed">
              Thoughtful essays, short everyday practices, and shared reflections on healthy ageing at home and caring neighbourhoods.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* YouTube Shorts Horizontal Carousel */}
      <section className="bg-[#FFFEFA] py-16 sm:py-20 border-b border-[#244B3B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ShortVideoCarousel />
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="bg-[#F8F5EC] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="max-w-2xl mb-10">
            <p className="text-sm font-medium text-[#555D54] mb-1">
              Long-Form Reading · Readable Layout
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#244B3B]">
              Community Essays & Stories
            </h2>
          </FadeUp>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {BLOG_ARTICLES.map((article) => (
              <StaggerItem key={article.slug} className="flex">
                <BlogCard article={article} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
