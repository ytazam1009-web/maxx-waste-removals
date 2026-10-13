export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/private/"],
    },
    sitemap: "https://www.maxxwasteremovals.co.uk/sitemap.xml",
    host: "https://www.maxxwasteremovals.co.uk",
  };
}