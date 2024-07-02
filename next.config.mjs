/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.hatchwise.com", "media.graphassets.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
