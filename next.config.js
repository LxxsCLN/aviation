/** @type {import('next').NextConfig} */
const nextConfig = { eslint: { ignoreDuringBuilds: true } }

//module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);