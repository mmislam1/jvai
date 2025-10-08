import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  eslint: {
    // Warning: ESLint errors will not fail production builds
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
