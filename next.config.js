const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
      source: '/logicola/:slug*',
      basePath: false,
      destination: 'https://logicola.org',
      permanent: true,
      }
    ]
  }
};

//const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
//initOpenNextCloudflareForDev();

module.exports = withContentCollections(nextConfig);