/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.REPOSITORY_NAME,
  env: {
    repo: process.env.REPOSITORY_NAME,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
