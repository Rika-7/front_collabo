import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["cdn.builder.io"],
  },
  trailingSlash: true,
  // Add this line to properly transpile recharts and other related libraries
  transpilePackages: [
    "recharts",
    "react-smooth",
    "d3-scale",
    "d3-array",
    "d3-shape",
    "d3-path",
    "d3-time",
    "d3-interpolate",
    "d3-color",
    "d3-time-format",
    "d3-format",
  ],
};

export default nextConfig;
