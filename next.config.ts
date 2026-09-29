import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/company#team",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
