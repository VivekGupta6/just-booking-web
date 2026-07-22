import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/news/BlogCard";
import BlogCta from "@/components/news/BlogCta";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRelatedBlogs,
  formatBlogDate,
} from "@/lib/blogs";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: "Article not found" };
  }

  return {
    title: `${blog.title} | Just Booking Blog`,
    description: blog.excerpt,
    keywords: [blog.country, blog.categoryLabel, "travel guide", "KAYAK"],
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const related = getRelatedBlogs(blog);

  return (
    <div className="flex min-h-full w-full flex-col">
      <Header />

      <main className="w-full flex-1 pb-10 sm:pb-14 lg:pb-20">
        <article className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="border-b border-border-green/60 py-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary-green"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Back to News
            </Link>
          </div>

          {/* Header */}
          <header className="w-full py-8 text-left sm:py-10 lg:py-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-bright-green">
              {blog.categoryLabel}
            </span>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-primary-green sm:text-3xl lg:text-4xl">
              {blog.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {blog.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>By {blog.author}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {blog.readTimeMinutes} min read
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={blog.publishedAt}>
                {formatBlogDate(blog.publishedAt)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{blog.country}</span>
            </div>
          </header>

          {/* Hero image */}
          <div className="flex w-full justify-center">
            <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-2xl bg-placeholder sm:max-w-[600px]">
              {blog.heroImage ? (
                <Image
                  src={blog.heroImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 600px"
                  className="object-cover"
                  priority
                />
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="w-full py-8 text-left sm:py-10 lg:py-12">
            <div className="prose-blog space-y-5">
              {blog.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-primary-green/90 sm:text-lg sm:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <BlogCta
              cta={blog.cta}
              country={blog.country}
              className="mt-10 sm:mt-12"
            />
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            className="border-t border-border-green/60 py-10 sm:py-14"
            aria-labelledby="related-heading"
          >
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <h2
                id="related-heading"
                className="text-xl font-bold text-primary-green sm:text-2xl"
              >
                More in {blog.categoryLabel}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {related.map((item) => (
                  <BlogCard key={item.id} blog={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
