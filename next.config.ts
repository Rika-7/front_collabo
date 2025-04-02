import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["cdn.builder.io"],
  },
  trailingSlash: true,
};

export default nextConfig;
