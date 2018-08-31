## 基础篇 
### 1安装和使用koa

1. 前提环境： node -v : v8.10.0 ; npm -v : 5.6.0
2. 安装koa  npm  -  koa -S   "koa": "^2.5.2"
3. 写一个基本服务 app.js [koa官网](https://koa.bootcss.com/)
   

### 2koa本质
> 对node的封装  中间件的集合 洋葱模型 一层层处理 每个中间件支持async await 语法 没有next()就不会往下执行 直接返回
> 中间件的使用 TODO
### 3koa几个重要名词
1. Context(上下文) 
2. Koa Context(ctx) 将 node 的 request 和 response 对象封装到单个对象中，为编写 Web 应用程序和 API 提供了许多有用的方法
3. ***注意*** ctx对象有一些简写的方法，例如`ctx.url`相当于`ctx.request.url`，`ctx.type`相当于`ctx.response.type`。
    ```
    app.use(async ctx => {
        ctx; // 这是 Context
        ctx.request; // 这是 koa Request
        ctx.response; // 这是 koa Response
    });
    ```
    Context 具体方法和访问器
    1. ctx.req Node 的 request 对象.
    2. ctx.res Node 的 response 对象.
    3. 绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：
    ```
    res.statusCode
    res.writeHead()
    res.write()
    res.end()
    ```
    1. 更多看文档

4. Request 处理请求
    1. 以下访问器和 Request 别名等效：
    ```
    ctx.header
    ctx.headers
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.origin
    ctx.href
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()
    ```
5. Reponse 处理响应
    1. 以下访问器和 Response 别名等效：
    ```
    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.message
    ctx.message=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.append()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=
    ```

### 4koa-router处理get post
1. 修改app.js 浏览器里面刷新后 输入http://localhost:3001/get/post/123 || http://localhost:3001/get/po
    ```
    Request URL: http://localhost:3001/get/po
    Request Method: GET
    Status Code: 200 OK
    Remote Address: [::1]:3001
    Referrer Policy: no-referrer-when-downgrade
    ```
2. app.js app.use(ctx=>{console.log(ctx.request.path)}) 结果是： /get/post/123 能拿到请求的路径 就可以判断处理不同的url了 但是每次都写比较麻烦 所以引入kao-router       中间件 统一处理get/post 等请求
    ctx.request 对象里面包含的东西 如下：
   ```
   {method: 'GET',
    url: '/',
    header:
    { host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        cookie: 'xxx' } }
   ```
   ctx 对象
   ```
   { request:
   { method: 'GET',
     url: '/index?id=1&name=asdas',
     header:
      { host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        cookie: 'xxx' } },
        response: { status: 404, message: 'Not Found', header: {} },
        app: { subdomainOffset: 2, proxy: false, env: 'development' },
        originalUrl: '/index?id=1&name=asdas',
        req: '<original node req>',
        res: '<original node res>',
        socket: '<original node socket>' }
   ```

   ctx.query 对象
   { id: '1', name: 'asdas' }
3. 安装koa-router   npm i koa-router -S
4. app-koa-router.js里面引入koa-router
5. 根据ctx.request.method 判断get还是post 做不同处理 ctx.query获取到参数 see app-koa-router.js
6. koa-router使用步骤：
    1. 引入并调用koa-router：`const router = require('koa-router')();`
    2. 我们使用router.get('/path', async fn)来注册一个GET请求。可以在请求路径中使用带变量的/hello/:name，变量可以通过ctx.params.name访问。再运行app-koa-router.js，我们就可以测试不同的URL：
    ```
    router.get('/home/:name',async(ctx,next) =>{
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}!</h1>`
    })

    router.get('/',async(ctx,next) =>{
        ctx.body = `<h1>this is index !</h1>`
    })
    ```
    3. 将koa-router这个中间件添加到app 上面`app.use(router.routers())`
7. router  输出后的样子
    ```
    router is  Router {
        opts: {},
        methods: [ 'HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE' ],
        params: {},
        stack: [] 
    }
    ```

8. 处理post请求要用到`koa-bodyparser`中间件 TODO
### 5重构koa项目 TODO

### 6MVC 
### 7模版引擎的使用 TODO
### 8处理静态资源  TODO


## 提高篇 TODO

> 1解析JSON——让 Koa2 支持响应 JSON 数据
> 2记录日志——开发日志中间件，记录项目中的各种形式信息
> 3错误处理——处理 HTTP 特定错误请求场景
> 4规范与部署——制定合适的团队规范，提升开发效率