export default function sitemap() {
  const baseUrl = "https://www.maxxwasteremovals.co.uk";

  const services = [
  "builders-waste",
  "garden-waste",
  "house-clearance",
  "appliance-removal",
  "office-clearance",
  "sofa-removal",
];

const areas = [
  "leicester",
  "coventry",
  "birmingham",
];

  const mainPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
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
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages = areas.map((area) => ({
  url: `${baseUrl}/${area}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
}));

return [...mainPages, ...servicePages, ...areaPages];
}