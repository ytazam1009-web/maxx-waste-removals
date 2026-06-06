export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maxxwasteremovals.co.uk";

  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
    },
    {
      url: `${baseUrl}/leicester`,
      lastModified,
    },
    {
      url: `${baseUrl}/coventry`,
      lastModified,
    },
    {
      url: `${baseUrl}/birmingham`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },
  ];
}