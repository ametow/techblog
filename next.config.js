// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.export = {
  images: {
    domains: ["127.0.0.1"],
  },
  optimizeImages: false,
};
// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       images: {
//         domains: ["127.0.0.1"],
//       },
//       optimizeImages: false,
//     },
//   ],
// ]);
