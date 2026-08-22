import type { MetadataRoute } from "next";

const BASE_URL = "https://smsmengineers.in";

const productSlugs = [
  "colorant",
  "shade-card",
  "automatic-color-dispenser",
  "manual-color-dispenser",
  "gyroshaker",
  "universal-stainer",
];

const serviceSlugs = [
  "amc",
  "color-consultancy",
  "pcb-design",
  "software",
  "technical-support",
  "engineering-consultancy",
  "downloads",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mission-vision`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/awards-recognitions`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/group-companies`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/become-partner`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/query-form`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feedback-form`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
