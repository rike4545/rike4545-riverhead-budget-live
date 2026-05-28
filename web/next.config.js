/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/rike4545-riverhead-budget-live' : '',
  assetPrefix: isProd ? '/rike4545-riverhead-budget-live/' : '',
};

module.exports = nextConfig;
