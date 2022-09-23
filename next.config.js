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
      {source: '/services/apps',destination: '/services/mobile-apps',permanent: true},
      {source: '/2016/10',destination: '/',permanent: true},
      {source: '/blog/pixolabo.com',destination: '/',permanent: true},
      {source: '/website-launch-checklist',destination: '/blog/website-launch-checklist',permanent: true},
      {source: '/how-to-add-custom-post-types-to-your-blog-homepage',destination: '/blog',permanent: true},
      {source: '/bluemail/subscribe',destination: '/',permanent: true},
      {source: '/home-2/lk-banner',destination: '/',permanent: true},
      {source: '/project/financetrain',destination: '/services',permanent: true},
    ]
  },
});

/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig*/