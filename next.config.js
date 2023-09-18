/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cms.lab.baraus.dev',
      'avatars.githubusercontent.com',
      'i.scdn.co'
    ]
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
