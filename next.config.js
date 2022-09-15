/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  reactStrictMode: true,
  images: {
    domains: ["mir-s3-cdn-cf.behance.net"],
    formats: ["image/webp"],
  },
  webpack(config) {
    return config;
  },
});
