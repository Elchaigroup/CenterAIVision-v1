/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ingrasys.com',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nvidia.com',
        pathname: '/content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.supermicro.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2vfia6k6wrouk.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pny.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bitmars.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'asicmarketplace.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zeusbtc.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
