const path = require('path');
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  ...nextTranslate(),
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;