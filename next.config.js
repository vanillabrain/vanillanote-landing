const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')

module.exports = {
  withImages,
  i18n,
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      http: false,
      stream: false,
      https: false,
      zlib: false
    };
    return config;
  },
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },

}