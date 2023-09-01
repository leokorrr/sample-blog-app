/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts/1',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
