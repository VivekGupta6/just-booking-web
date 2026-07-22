import blogsData from "@/data/blogs.json";

export const BLOG_CATEGORIES = {
  "travel-recommendations": "Travel recommendations",
  "travel-experiences": "Travel experiences",
  "tips-tricks": "Tips & tricks",
  "car-rentals": "Car rentals",
  stays: "Stays & hotels",
  flights: "Flights",
  itineraries: "Itineraries",
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export type BlogCta = {
  label: string;
  href: string;
  type: "flights" | "stays" | "cars" | "packages";
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: BlogCategory;
  categoryLabel: string;
  country: string;
  author: string;
  readTimeMinutes: number;
  publishedAt: string;
  featured?: boolean;
  trending?: boolean;
  heroImage: string | null;
  cta: BlogCta;
};

const BLOGS = blogsData as Blog[];

export function getAllBlogs(): Blog[] {
  return [...BLOGS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return BLOGS.find((blog) => blog.slug === slug);
}

export function getFeaturedBlog(): Blog | undefined {
  return BLOGS.find((blog) => blog.featured) ?? BLOGS[0];
}

export function getTrendingBlogs(
  limit = 4,
  excludeIds: Iterable<string> = [],
): Blog[] {
  const excluded = new Set(excludeIds);
  return BLOGS.filter((blog) => blog.trending && !excluded.has(blog.id)).slice(
    0,
    limit,
  );
}

export function getLatestBlogs(
  limit = 4,
  excludeIds: Iterable<string> = [],
): Blog[] {
  const excluded = new Set(excludeIds);
  return getAllBlogs()
    .filter((blog) => !excluded.has(blog.id))
    .slice(0, limit);
}

export function getBlogsByCategory(category: BlogCategory): Blog[] {
  return BLOGS.filter((blog) => blog.category === category);
}

export function getCategorySections(
  excludeIds: Iterable<string> = [],
): {
  category: BlogCategory;
  label: string;
  description: string;
  blogs: Blog[];
}[] {
  const excluded = new Set(excludeIds);
  const sectionMeta: Record<
    BlogCategory,
    { description: string; maxItems?: number }
  > = {
    "travel-recommendations": {
      description:
        "Not sure where to go? Get recommendations on destinations, the best times to visit, and what to do.",
    },
    "travel-experiences": {
      description:
        "Find the best things to see and do based on your interests or type of travel.",
    },
    "tips-tricks": {
      description:
        "Hack your way to amazing trips with tips on flights, stays, packing, and more.",
    },
    "car-rentals": {
      description:
        "From booking and insurance to driving abroad — everything you need to know about renting a car.",
    },
    stays: {
      description:
        "Discover where to stay, from boutique hotels to beach resorts in top destinations.",
    },
    flights: {
      description:
        "Compare fares, find the best booking windows, and fly smarter to destinations worldwide.",
    },
    itineraries: {
      description:
        "Plan the perfect trip with day-by-day guides for popular countries and cities.",
    },
  };

  return (Object.keys(BLOG_CATEGORIES) as BlogCategory[])
    .map((category) => ({
      category,
      label: BLOG_CATEGORIES[category],
      description: sectionMeta[category].description,
      blogs: getBlogsByCategory(category).filter(
        (blog) => !excluded.has(blog.id),
      ),
    }))
    .filter((section) => section.blogs.length > 0);
}

export function getRelatedBlogs(blog: Blog, limit = 3): Blog[] {
  return BLOGS.filter(
    (item) => item.slug !== blog.slug && item.category === blog.category,
  ).slice(0, limit);
}

export function getAllBlogSlugs(): string[] {
  return BLOGS.map((blog) => blog.slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}
