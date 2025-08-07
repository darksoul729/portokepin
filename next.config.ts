import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co', // Spotify images
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary images
        pathname: '/do3brf9qe/image/upload/**', // Sesuaikan dengan folder Cloudinary kamu
      },
    ],
  },
};

export default nextConfig;
