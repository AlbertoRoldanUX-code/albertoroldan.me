import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingIncludes: {
    "/api/guides/[slug]/pdf": ["./src/assets/fonts/**/*"],
  },
  async redirects() {
    return [
      {
        source: "/vault",
        destination: "/guides/field-manual",
        permanent: true,
      },
      {
        source: "/vault/:slug",
        destination: "/guides/:slug",
        permanent: true,
      },
      {
        source: "/vault/:slug/guide",
        destination: "/guides/:slug",
        permanent: true,
      },
      {
        source: "/guides/:slug/guide",
        destination: "/guides/:slug",
        permanent: true,
      },
      {
        source: "/en/guides/:slug/guide",
        destination: "/en/guides/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
