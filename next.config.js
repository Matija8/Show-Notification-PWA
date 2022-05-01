/** @type {import('next').NextConfig} */

const isDevEnv = process.env.NODE_ENV === 'development';
const basePath = isDevEnv ? '' : '/Show-Notification-PWA';

module.exports = {
  reactStrictMode: true,
  env: {
    basePath,
  },
  basePath,
};
