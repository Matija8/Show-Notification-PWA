/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const basePath = '/Show-Notification-PWA';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    customWorkerDir: 'service-worker',
  },
  reactStrictMode: true,
  env: {
    basePath,
  },
  basePath,
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
});
