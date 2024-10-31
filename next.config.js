/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      'images.unsplash.com',
      'cms.lab.baraus.dev',
      'avatars.githubusercontent.com',
      'i.scdn.co'
    ]
  }
};

module.exports = nextConfig;
