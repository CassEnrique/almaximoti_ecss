import type { NextConfig } from "next";

// const BasePath = process.env.BASEPATH;
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  skipMiddlewareUrlNormalize: true,
  // swcMinify: false,
  // output: "export",
  // distDir: "build",

  env: {
    JWT_EVENT_SECRET_KEY: process.env.NEXT_PUBLIC_JWT_EVENT_SECRET_KEY,
    JWT_SECRET_KEY: process.env.NEXT_PUBLIC_JWT_SECRET_KEY,
    ASSET_PREFIX: process.env.NEXT_PUBLIC_ASSET_PREFIX,
    APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    LOTTERY: process.env.NEXT_PUBLIC_LOTTERY,
    URI_API: process.env.NEXT_PUBLIC_URI_API,
    URI_VER: process.env.NEXT_PUBLIC_URI_VER,
    APP: process.env.NEXT_PUBLIC_APP,
  },

  images: {
    domains: ["lucky-ant-fnd.onrender.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lucky-ant-fnd.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagenes-sorteos-xenova-2025.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/proyecto",
        destination: "/project",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/inicio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/project",
        destination: "/proyecto",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
