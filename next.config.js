require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
  BACKEND_URL: process.env.BACKEND_URL,
}

module.exports = {nextConfig, env}
