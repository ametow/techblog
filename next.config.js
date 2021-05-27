// next.config.js
const basePath = process.env.NODE_ENV === "production" ? "/repo" : "";
module.export = {
  images: {
    domains: ["127.0.0.1"],
  },
  optimizeImages: false,
  basePath: "/repo",
  assetPrefix: "/repo/",
};
