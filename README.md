#### 简介
学习nodejs，用其内置module写的简单server，返回静态html页面及其关联的静态资源，静态资源的 `Content-Type` 根据其请求后缀进行设置，客户端拿到全部静态文件后能解析渲染出正常页面。

#### master 分支
`npm install`   安装依赖
`node server.js`    启动服务器
浏览器访问 `localhost:8081`，可以在 network 里看到先请求html文件，然后解析代码，依次请求 js, css, img等。

#### router 分支
master分支中只支持访问 `XXX/index.html` 或 `XXX/profile.html` 这样的uri，不支持 `XXX/login`, `XXX/register` 这样的url，添加路由匹配功能后可支持后者这样格式的url。

