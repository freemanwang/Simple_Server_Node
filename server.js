const http = require('http');
const url = require('url')
const routes = require('./module/routes')
// const fs = require('fs') // 读取文件
// const path = require('path')
// const url = require('url')

// const getMime = require('./module/routes').getMime

/**
 * 打开index.html,返回
 * 
 * 
 */

http.createServer(function (request, response) {
    routes.static(request, response, 'static') // 这里把带后缀的都处理了，例如 index.html

    // 如果路径不是之前那种指定到文件的uri，它不会处理，会走到下面路由匹配的流程
    // 类似  XXX/login; XXX/register 这样的，就用路由进行匹配
    let pathname = url.parse(request.url).pathname // 拿纯url，不带参数

    // 根据路径进行匹配，执行相应的操作
    if (pathname === '/login') {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
        response.end('<h1>Login Page</h1>')
    } else if (pathname === '/register') {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
        response.end('<h1>Register Page</h1>')
    } else if (pathname === '/admin') {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
        response.end('<h1>Admin Page</h1>')
    } else {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
        response.end('<h1>404 Page</h1>')
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');