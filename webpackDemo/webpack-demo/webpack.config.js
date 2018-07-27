const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    //这里指定输出的文件名字
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};