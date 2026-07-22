import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Blog, BlogCategory } from "@/lib/blogs";
import BlogCard from "./BlogCard";

type BlogCategorySectionProps = {
  category: BlogCategory;
  label: string;
  description: string;
  blogs: Blog[];
};

export default function BlogCategorySection({
  category,
  label,
  description,
  blogs,
}: BlogCategorySectionProps) {
  if (blogs.length === 0) return null;

  return (
    <section
      aria-labelledby={`category-${category}`}
      className="border-t border-border-green/60 py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id={`category-${category}`}
              className="text-xl font-bold tracking-tight text-primary-green sm:text-2xl"
            >
              {label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          </div>
          <Link
            href={`/news?category=${category}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-green transition-colors hover:text-bright-green"
          >
            See all
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
