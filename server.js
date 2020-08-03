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

    // 如果路径不上上面那种指定文件url的，它不会处理，会走到下面的流程
    // 类似  XXX/login; XXX/index 这样的，就用路由进行匹配

    let pathname = url.parse(request.url).pathname // 拿纯url，不带参数

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


    // let extName = path.extname(reqUrl) // 后缀名，例如 '.html'   '.jpeg'

    // if (reqUrl != '/favicon.ico') {
    //     let fullPath = reqUrl === '/' ? '/index.html' : reqUrl
    //     // let extName = path.extName(reqUrl) // 后缀名，例如 '.html'   '.jpeg'

    //     fullPath = './static' + reqUrl
    //     fs.readFile(fullPath, (err, data) => {
    //         if (err) {
    //             console.log(404, err);
    //             res404 = fs.readFileSync('./static/404.html')
    //             response.writeHead(404, {'Content-Type': 'text/html;charset=utf8'});
    //             response.end(res404)
    //         }
    //         let mime = getMime(extName)
    //         response.writeHead(200, {'Content-Type': `${mime};charset=utf8`}); // 根据后缀名找到对应的MIME返回，避免了写死html导致的js、css的不可解析
    //         response.end(data);
    //     })
    // }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');