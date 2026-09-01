/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'smsmengineers.com',
        'www.smsmengineers.com',
        'smsm-engineers.vercel.app',
        'localhost:7017',
        'localhost:3000',
      ],
    },
  },
};

export default nextConfig;
