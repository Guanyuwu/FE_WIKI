//node 内置模块 处理路径的
const path = require("path");

module.exports = {
  //1入口
  entry: "./src/index.js",
  //2出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  //3loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
