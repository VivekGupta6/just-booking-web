export type LegalDocId = "privacy" | "terms";

export type LegalDoc = {
  id: LegalDocId;
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const LEGAL_DOCS: Record<LegalDocId, LegalDoc> = {
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    lastUpdated: "21 July 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Just Booking (Justbooking.co.in) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you browse or use our website to explore flights, hotels, and travel inspiration.",
          "By using Just Booking, you agree to the practices described in this policy.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: [
          "We may collect basic usage information such as pages viewed, device type, browser type, approximate location, and referring URLs to improve site performance and content.",
          "If you contact us or submit a form in the future, we may collect details you provide such as your name, email address, and message content.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use information to operate and improve Just Booking, understand how travelers explore destinations, personalize content where appropriate, and maintain site security.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "Just Booking may use cookies or similar technologies to remember preferences, measure traffic, and improve the browsing experience. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Third-party links",
        paragraphs: [
          "Our site may link to third-party travel partners or booking pages. Those sites have their own privacy policies, and we are not responsible for their practices.",
        ],
      },
      {
        heading: "Data retention and security",
        paragraphs: [
          "We retain information only as long as needed for the purposes described in this policy, unless a longer period is required by law. We take reasonable measures to protect information against unauthorized access or disclosure.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you. Contact us through Justbooking.co.in to make a request.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this notice will reflect the latest revision.",
        ],
      },
    ],
  },
  terms: {
    id: "terms",
    title: "Terms & Conditions",
    lastUpdated: "21 July 2026",
    sections: [
      {
        heading: "Agreement to terms",
        paragraphs: [
          "Welcome to Just Booking (Justbooking.co.in). By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use the site.",
        ],
      },
      {
        heading: "About our service",
        paragraphs: [
          "Just Booking is a frontend travel discovery experience that helps users explore destinations, hotels, flights, and related travel content. Featured listings may link to third-party partners for booking.",
          "We do not operate as an airline, hotel, or payment processor unless explicitly stated.",
        ],
      },
      {
        heading: "Use of the website",
        paragraphs: [
          "You agree to use Just Booking only for lawful purposes and in a way that does not disrupt the site, attempt unauthorized access, or misuse content.",
          "You may not scrape, copy, or redistribute substantial portions of the site without permission, except as allowed by law.",
        ],
      },
      {
        heading: "Travel information and pricing",
        paragraphs: [
          "Hotel, flight, and destination information shown on Just Booking is provided for informational and inspiration purposes. Prices, availability, ratings, and schedules can change and may differ on partner sites.",
          "Before booking, always verify details directly with the travel provider or booking partner.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "Links to external websites are provided for convenience. Just Booking is not responsible for the content, policies, bookings, payments, or customer support of third-party sites.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The Just Booking name, branding, layout, and original content on this website are owned by Just Booking or its licensors. All rights reserved.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "The website is provided “as is” without warranties of any kind, express or implied. We do not guarantee uninterrupted availability, error-free content, or that travel deals will remain available.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, Just Booking shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site or reliance on travel information displayed here.",
        ],
      },
      {
        heading: "Changes to these terms",
        paragraphs: [
          "We may update these Terms & Conditions periodically. Continued use of Just Booking after changes means you accept the revised terms.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For questions about these Terms & Conditions, contact us through Justbooking.co.in.",
        ],
      },
    ],
  },
};
