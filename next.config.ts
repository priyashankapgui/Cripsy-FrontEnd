/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn0.it4profit.com" },
      { protocol: "https", hostname: "cdn.example.com" },
      { protocol: "https", hostname: "us.mavi.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      
      
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**',
      },
    ],
  }
  
};

module.exports = nextConfig;
