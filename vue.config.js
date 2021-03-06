// module.exports = {
// 	configureWebpack: {
// 		resolve: {
// 			alias: {
// 				"src": '@',
// 				"assets": "@/assets",
// 				"components": "@/components",
// 				"network": "@/network",
// 				"views": "@/views",
// 			}
// 		}
// 	}
// }

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
        .set("@", resolve("src"))
        .set("assets", resolve("src/assets"))
        .set("components", resolve("src/components"))
        .set("views", resolve("src/views"))
        .set("network", resolve("src/network"))
  },
}
