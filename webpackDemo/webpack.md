### 什么是webpack
> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。（　取自官网定义）
### 优点
    - 专注于处理模块化的项目，能做到开箱即用一步到位；
    - 通过 Plugin 扩展，完整好用又不失灵活；
    - 使用场景不仅限于 Web 开发；
    - 社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展；良好的开发体验。
### 缺点
    - Webpack的缺点是只能用于采用模块化开发的项目。

### 为什么写这个文章？
    - 1平时都是vue-cli生成的 自己没有系统的看过文档 没有自己全面的实践过
    - 2用别人的不知道原理 自己动手多少还能多理解些
    - 3自己动手后 以后再有新的需求 可以自己增删webpack.congfig的内容 可定制性高
    - 4给同样懵懵懂懂的同伴一些参考，当时我学的时候不是很懂 再开一遍就好多了 也给自己提供快速查看webpack的知识点的入口
    - 4深入学习的 TODO 看webpack怎么实现
### 为什么要有webpack
> 现在的前端开发不仅仅开发过程中只写html css js
    - 模块化开发
    - html
        - pug
    - css
        - sass
        - less
    - js(原生开发的少 基本都有框架配合库或者框架的周边配套设施，为什么用框架？提高开发效率 专注写js 屏蔽不同开发代码风格不一致的问题（可能总结的不准确）)
        - vue   编写.vue文件 es6语法
        - react jsx语法 es6语法
        - ng(ts 写)
    - 更多写法。。。
> 生产过程中html css js 根据需求采用不同的形式书写 提高开发效率 但是最终结果 浏览器里面只认html css js  这时候我们就要通过一个工具来处理生成过程中的各种形式的js css html 图片等等 这时候就要webpack出场了

### web pack能干什么？ 查阅资料以后 自己亲自实践以后就有更深刻的体会 再总结

### 四个核心概念
 - 1入口(entry)
 - 2输出(output)
 - 3loader
 - 4插件(plugins)

### 1入口
入口：webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。
```
 module.exports = {
  entry: './path/to/my/entry/file.js'
};  
```

### 2输出
output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

webpack.config.js:
```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

### 3loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

注意，loader 能够 import 导入任何类型的模块（例如 .css 文件），这是 webpack 特有的功能，其他打包程序或任务执行器的可能并不支持。我们认为这种语言扩展是有很必要的，因为这可以使开发人员创建出更准确的依赖关系图。

在更高层面，在 webpack 的配置中 loader 有两个目标：

 - test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
 - use 属性，表示进行转换时，应该使用哪个 loader。

```
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```
上面使用loader的意思是什么？
“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。”

### 4plugins
loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```
整体思路：1要解决什么功能？ 2这个功能有对应的plugin么 3安装plugin 4引入 5对应位置（plugins 字段里面对应的数组里面）实例化插件 6要传什么参数？ 再细看对应插件的文档

### 那这些我都熟悉了 我改怎么写第一个webpck demo 呢？


前提安装node npm
思路（说的是上面1、配置这种 本质就是写一个webpack.congfig.js 这个文件）：
    - 问题0 这个文件 叫什么名字 什么后缀？ webpack.congfig.js
    - 问题1在哪写这个webpack.config.js? 一般都在项目根目录（ 比如你建了一个webpackDemo文件夹）下 那webpackDemo/webpack.config.js 就在这里写这个文件 以后多类似的文件比如webpack.config2.js 那么就项目根目录建立一个文件夹 config  那就在webpackDemo/config/webpack.config2.js
    - 问题2写 里面怎么写？（这个可以参考文件 上面说的四个要素 文档里有写的语法 https://www.webpackjs.com/concepts/）
        - 问题2.1怎么知道编译css用哪个loader？其实 官网就有！（困扰我好久 看文档不细致）（https://www.webpackjs.com/loaders/）
        - 同样既然有loaders的文档 那plugin应该也有！（https://www.webpackjs.com/plugins/）
    - 问题3这个文件写完了怎么让这个文件生效呢？
    - 问题待完善。。。




### 写之前最好通读文档并且对照vue-cil生成的vue项目里面的webpack.config.js 一起看 大致知道为什么这么写 再自己写
### vue cli 生成的webpack.congfig.js
```
const {
  resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /layout\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /favicon\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      // '~': resolve(__dirname, 'src')
      vue: 'vue/dist/vue.js'
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})

```
 可以看出上面包括基本的四大要素 
    - 1entry 
    - 2output 
    - 3loaders 写法上要写在module里面 rules:[{loader1,;loader2}] 
    - 4plugins:[new Plugin1(传进去对应参数),new Plugin（传进去对应参数）] 
    - 5别名配置写在resolve对应的字段里面 详情看文档 （https://www.webpackjs.com/configuration/resolve/#resolve）

### 配置 Webpack 的方式有两种：
- 1通过一个 JavaScript 文件描述配置，例如使用 webpack.config.js 文件里的配置；
- 2执行 Webpack 可执行文件时通过命令行参数传入，例如 webpack --devtool source-map。

### 经过上面的熟悉以后 就可以 开始写：（命名为 webpack-demo） https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85
- 创建文件可以在编辑器里面可视化操作创建 也可命令行方式创建 看你熟悉哪个  我这里不是命令行创建的目录 （这个官网的例子 其实用的 上面配置webpack的方式 2）
    - 1创建目录webpack-demo 
    - 2在当前目录下 初始化package.json(就是通过命令生成这个名字的文件 里面不可以注释 详细信息看npm package.json的文档https://docs.npmjs.com/files/package.json) 命令是 npm init -y(不加-y会多很多次确认 一般都加-y默认直接生成package.json就好) 在创建目录webpack-demo 下执行这条语句 确保在这个目录下执行完这条语句后  成功的标志是webpack-demo/package.json 多个这个文件了 这个package.json是后续npm install 其他包的基础前提 没它不行 如果当前目录根目录里面没有package.json 跟当前目录平级的其他目录里面有package.json 那么你要安装的包就会安装到不是你想要的位置了 怎么看安装成功了？ 看package.json devDependencies   npm install 后面跟的参数详解（https://docs.npmjs.com/cli/install） 安完包以后package.json里面的devDependencies 或者dependencies 的内容会自己更新
    - 3创建一个 bundle 文件
        - 首先，我们稍微调整下目录结构，将“源”代码(/src)从我们的“分发”代码(/dist)中分离出来。“源”代码是用于书写和编辑的代码。“分发”代码是构建过程产生的代码最小化和优化后的“输出”目录 src：开发目录  自定义的平级的 dist目录是要打包后存放文件的目录 也就是webpack.config.js里面的出口（output）存放的目录
        - npm install --save lodash
        - 运行     可以这样说，执行 npx webpack，会将我们的脚本作为入口起点，然后 输出 为 main.js。Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack）： 
        - 运行成功后 dist下会多个你刚才src里面写的main.js 打包后的js 打开dist下的index.html 看到页面里面显示 hello webpack 你就成功了！ 
        - 再次执行的时候 需要指明mode字段:三个参数  webpack --mode=production ||  webpack --mode=none || webpack --mode=development
        - 使用一个配置文件方式 https://www.webpackjs.com/guides/getting-started/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6
        - npm srcipts  https://www.webpackjs.com/guides/getting-started/#npm-%E8%84%9A%E6%9C%AC-npm-scripts-

### 经过上面的熟悉以后 就可以 开始写自己写webpack.config.js这种方式了：（命名为 webpack-demo--res-config） 使用一个配置文件方式
 - 1新建目录 webpack-demo--res-config 
 - 2当前目录下 npm init -y 生成package.json
 - 3局部安装 当前目录下执行命令： npm install webpack webpack-cli --save-dev  npm install --save lodash
 - 4上面三步成功后 当前目录下新增index.html文件 和src文件夹，src文件夹里面新增 index.js  里面的内容参考文件
 - 5加载css 执行命令： npm install --save-dev style-loader css-loader
    - webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
这使你可以在依赖于此样式的文件中 import './style.css'。现在，当该模块运行时，含有 CSS 字符串的 style 标签，将被插入到 html 文件的 head 中。
    - src 下新建style.css  里面的内容参考文件
    - 修改index.html 里面srcipt的src 写法是： src="dist/bundle.js"
    -  能看到页面上输出红色的hello webpack就是成功了
- TODO 样式里面sass less的支持（本质就多加对应loader的配置） 更多类型图片 字体 数据 全局资源 不过会一个css的 其他的都是看具体语法的细节了

### 小结：TODO
### 问题：(自己不是很清晰的问题)
  - 1什么情况用webpack  什么时候用gulp? 等其他工具
  - 2more to be added 
### 参考：
- webpack中文文档 https://www.webpackjs.com/concepts/ 
- http://webpack.wuhaolin.cn/ 参考很少 只看个开头 看就不下去了
- 官方demo  https://github.com/webpack/webpack/tree/master/examples（自己还未实践 大概看了下里面例子很丰富 有需要再看）
- 阮一峰 webpack (https://github.com/ruanyf/webpack-demos)(以前写过一遍所有例子 不过现在最好看官网文档 因为这次实践下来发现官网文档讲的很好了，基本不需要参考别的资料)