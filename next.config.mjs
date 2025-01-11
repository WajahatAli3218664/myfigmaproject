/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.themealdb.com', '677fc83f0476123f76a8134b.mockapi.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '677fc83f0476123f76a8134b.mockapi.io',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

