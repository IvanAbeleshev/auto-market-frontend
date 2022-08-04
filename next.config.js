require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
  BACKEND_URL: process.env.BACKEND_URL,
  COUNT_MOST_POPULAR_ELEMENTS_OF_GROUP: process.env.COUNT_MOST_POPULAR_ELEMENTS_OF_GROUP,
}

module.exports = {nextConfig, env}
