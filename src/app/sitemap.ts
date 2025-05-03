import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.APP_PUBLIC_URI}`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          es: `${process.env.APP_PUBLIC_URI}/en`,
          de: `${process.env.APP_PUBLIC_URI}/ja`,
        },
      },
    },
  ];
}
