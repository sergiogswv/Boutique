/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'boutique-tawny.vercel.app'
    }]
  }
}

module.exports = nextConfig
