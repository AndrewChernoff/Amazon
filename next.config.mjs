/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.hatchwise.com',
        port: '',
        pathname: '/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: 'images/I/61xnEcip5RL._SX3000_.jpg',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
