/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/fixology-web",
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig
