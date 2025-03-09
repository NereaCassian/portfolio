import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'blog.nereacassian.com',
      'localhost',
      'portfolio-9sr.pages.dev'
      
    ],
  },
};
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }

export default nextConfig;