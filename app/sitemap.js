export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maxxwasteremovals.co.uk";

  const services = [
    'builders-waste',
    'garden-waste',
    'house-clearance',
    'mattress-removal',
    'office-clearance',
    'sofa-removal'
  ];

  const mainPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date( ),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leicester`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coventry`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/birmingham`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...mainPages, ...servicePages];
}
