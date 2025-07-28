import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        port: '',
        pathname: '/**', // it allows all Image Paths
    },
    {
      protocol: 'https',
      hostname: 'spoonacular.com',
      pathname: '/**', // it allows all Image Paths
    },
    ],
  },
};

export default nextConfig;
