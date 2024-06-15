/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.hatchwise.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
