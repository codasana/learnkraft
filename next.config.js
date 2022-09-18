/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com' // Twitter Profile Picture
    ]
  },
  async redirects() {
    return [
      {
        source: '/services/apps',
        destination: '/services/mobile-apps',
        permanent: true,
      },
    ]
  },
});


/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig*/