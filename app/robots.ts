import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Explicitly allow search engines and AI / LLM crawlers to index public pages.
 */
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "anthropic-ai",
    "Google-Extended",
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "Applebot",
    "Applebot-Extended",
    "PerplexityBot",
    "Amazonbot",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "meta-externalagent",
    "FacebookBot",
    "Diffbot",
    "YouBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiAgents,
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
