/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  productionBrowserSourceMaps: false
};

const withPWA = nextPWA({
  dest: 'public',
  offlineGoogleAnalytics: true,

});

export default withPWA(nextConfig);
