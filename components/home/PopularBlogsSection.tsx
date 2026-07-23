import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { getPopularBlogs } from "@/lib/blogs";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function PopularBlogsSection() {
  const popular = getPopularBlogs();

  if (popular.length === 0) return null;

  return (
    <section
      id="popular-blogs"
      data-animate-section
      className="scroll-mt-20 border-t border-border-green/60 py-10 sm:scroll-mt-24 sm:py-14 md:py-16 lg:py-20"
      aria-labelledby="popular-blogs-heading"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div
          data-animate-intro
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <h2
              id="popular-blogs-heading"
              className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl md:text-3xl"
            >
              Popular blogs
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Most-searched travel guides — plan trips, find hotels, and check
              visas before you go.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 self-start text-sm font-bold text-bright-green transition-colors duration-200 hover:text-primary-green sm:self-auto"
          >
            View all blogs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {popular.map(({ label, href, blog }) => (
            <article
              key={blog.id}
              data-animate-card
              className="group overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <Link
                href={href}
                className="flex h-full flex-col focus-visible:outline-none"
                aria-label={`Read: ${label}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-placeholder sm:aspect-[4/3]">
                  {blog.heroImage ? (
                    <Image
                      src={blog.heroImage}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <ImagePlaceholder className="h-full w-full rounded-none" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-bright-green">
                    {blog.categoryLabel}
                  </span>
                  <h3 className="mt-2 line-clamp-2 text-base font-bold text-primary-green sm:text-lg">
                    {label}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                    {blog.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted sm:mt-4 sm:text-sm">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {blog.readTimeMinutes} min read
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
