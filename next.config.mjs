/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    NEXT_PUBLIC_TINA_CLIENT_ID: '976fa33b-da74-40b1-ae4a-a4eb6d2f2cc4',
    TINA_TOKEN: '56c307a56545abd9ff54eff08ee0b94aff68440c'
  }
};

export default nextConfig;
