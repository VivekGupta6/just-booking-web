import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/news/BlogCard";
import BlogCategorySection from "@/components/news/BlogCategorySection";
import {
  getFeaturedBlog,
  getLatestBlogs,
  getTrendingBlogs,
  getCategorySections,
  getBlogsByCategory,
  BLOG_CATEGORIES,
  type BlogCategory,
} from "@/lib/blogs";

export const metadata: Metadata = {
  title: "News & Travel Tips | Just Booking Blog",
  description:
    "Expert travel guides, flight tips, hotel recommendations, car rental advice, and itineraries for popular destinations worldwide.",
};

type NewsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams;
  const categoryFilter = params.category as BlogCategory | undefined;
  const isFiltered =
    categoryFilter && categoryFilter in BLOG_CATEGORIES;

  const featured = getFeaturedBlog();
  const shownIds = new Set(featured ? [featured.id] : []);
  const latest = getLatestBlogs(4, shownIds);
  latest.forEach((blog) => shownIds.add(blog.id));
  const trending = getTrendingBlogs(4, shownIds);
  trending.forEach((blog) => shownIds.add(blog.id));
  const categorySections = getCategorySections(shownIds);

  const filteredBlogs = isFiltered
    ? getBlogsByCategory(categoryFilter)
    : null;

  return (
    <div className="flex min-h-full w-full flex-col">
      <Header />

      <main className="w-full flex-1">
        {/* Hero */}
        <section className="border-b border-border-green/60 bg-primary-green/5 py-10 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-2xl font-bold tracking-tight text-primary-green sm:text-3xl lg:text-4xl">
                {isFiltered
                  ? BLOG_CATEGORIES[categoryFilter]
                  : "News & expert travel tips"}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
                {isFiltered
                  ? `Browse all articles in ${BLOG_CATEGORIES[categoryFilter].toLowerCase()}.`
                  : "Destination guides, flight hacks, stay recommendations, car rental tips, and itineraries to help you plan your next adventure."}
              </p>
              {isFiltered && (
                <Link
                  href="/news"
                  className="mt-4 inline-block text-sm font-semibold text-primary-green underline-offset-4 hover:underline"
                >
                  ← Back to all articles
                </Link>
              )}
            </div>
          </div>
        </section>

        {isFiltered && filteredBlogs ? (
          <section className="py-10 sm:py-14">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              {filteredBlogs.length === 0 && (
                <p className="text-center text-muted">
                  No articles in this category yet.
                </p>
              )}
            </div>
          </section>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <section className="py-10 sm:py-12 lg:py-14">
                <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                  <BlogCard blog={featured} variant="featured" />
                </div>
              </section>
            )}

            {/* Latest & Trending */}
            <section className="border-t border-border-green/60 py-10 sm:py-12">
              <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <h2 className="text-xl font-bold text-primary-green sm:text-2xl">
                      Latest
                    </h2>
                    <div className="mt-4 space-y-4">
                      {latest.map((blog) => (
                        <BlogCard
                          key={blog.id}
                          blog={blog}
                          variant="compact"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-primary-green sm:text-2xl">
                      Trending
                    </h2>
                    <div className="mt-4 space-y-4">
                      {trending.map((blog) => (
                        <BlogCard
                          key={blog.id}
                          blog={blog}
                          variant="compact"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Category sections */}
            {categorySections.map((section) => (
              <BlogCategorySection
                key={section.category}
                category={section.category}
                label={section.label}
                description={section.description}
                blogs={section.blogs}
              />
            ))}

            {/* Newsletter CTA */}
            <section className="border-t border-border-green/60 bg-primary-green py-12 sm:py-16">
              <div className="mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Want to know the world better? We got you covered.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                  Get travel inspiration, destination guides, and booking tips
                  to plan your next trip with confidence.
                </p>
                <a
                  href="https://www.kayak.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-bright-green px-6 py-3 text-sm font-bold text-primary-green transition-opacity hover:opacity-90"
                >
                  Start planning on KAYAK
                </a>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
