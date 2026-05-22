/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Wajib ditambah agar tidak error saat di-online-kan
  },
}

module.exports = nextConfig