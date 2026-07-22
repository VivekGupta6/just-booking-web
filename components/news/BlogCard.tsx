import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { Blog } from "@/lib/blogs";
import { formatBlogDate } from "@/lib/blogs";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type BlogCardProps = {
  blog: Blog;
  variant?: "default" | "compact" | "featured";
};

export default function BlogCard({
  blog,
  variant = "default",
}: BlogCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={
        isFeatured
          ? "group overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
          : "group overflow-hidden rounded-2xl border border-border-green/50 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm"
      }
    >
      <Link
        href={`/news/${blog.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
        aria-label={`Read: ${blog.title}`}
      >
        <div
          className={
            isFeatured
              ? "relative aspect-[16/9] w-full overflow-hidden bg-placeholder sm:aspect-[21/9]"
              : "relative aspect-[16/10] w-full overflow-hidden bg-placeholder"
          }
        >
          {blog.heroImage ? (
            <Image
              src={blog.heroImage}
              alt=""
              fill
              sizes={
                isFeatured
                  ? "(max-width: 1024px) 100vw, 1280px"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <ImagePlaceholder className="h-full w-full rounded-none" />
          )}
        </div>

        <div
          className={
            isFeatured
              ? "flex flex-1 flex-col p-5 sm:p-6 lg:p-8"
              : isCompact
                ? "flex flex-1 flex-col p-4"
                : "flex flex-1 flex-col p-4 sm:p-5"
          }
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-bright-green">
            {blog.categoryLabel}
          </span>

          <h3
            className={
              isFeatured
                ? "mt-2 line-clamp-3 text-xl font-bold text-primary-green sm:text-2xl lg:text-3xl"
                : "mt-2 line-clamp-2 text-base font-bold text-primary-green sm:text-lg"
            }
          >
            {blog.title}
          </h3>

          {!isCompact && (
            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted sm:line-clamp-3">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted sm:mt-4 sm:text-sm">
            <span>{blog.author}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {blog.readTimeMinutes} min read
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={blog.publishedAt}>
              {formatBlogDate(blog.publishedAt)}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
