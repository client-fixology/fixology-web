/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "https://client-fixology.github.io/fixology-web",
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig
