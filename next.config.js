/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'flagcdn.com'
    ],
  },
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
  devIndicators: {
    buildActivity: false, //build loading indicator
  },
  webpack: (config) => {
    config.resolve.fallback = { tls: false, fs: false, net: false };

    return config;
  },
  async rewrites() {
    //loads index page contents onto the missing contacts route ie does not alter url
    return [
      {
        source: '/contact',
        destination: '/',
      },
    ];
  },
  async redirects() {
    //re-routes to this existing page ie handles typos or lazy types
    return [
     
    ];
  },

  staticPageGenerationTimeout: 1000,
  env: {
  },
};

module.exports = nextConfig;