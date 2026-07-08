import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json exists in C:\Users\akinj, which makes Next.js
  // mis-detect the workspace root — pin it to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
