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
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
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
        source: "/es/guides/:slug/guide",
        destination: "/es/guides/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
