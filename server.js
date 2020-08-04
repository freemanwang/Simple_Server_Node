const http = require('http');
const fs = require('fs') // 读取文件
const path = require('path')
const url = require('url')

const getMime = require('./module/mime').getMime

/**
 * 打开index.html,返回
 * 
 * 
 */

http.createServer(function (request, response) {
    let reqUrl = url.parse(request.url).pathname // 避免了GET传参导致reqUrl带了参数找不到资源
    let fullPath = reqUrl === '/' ? '/index.html' : reqUrl
    let extName = path.extname(fullPath) // 后缀名，例如 '.html'   '.jpeg'

    if (reqUrl != '/favicon.ico') {
        console.log(`本地访问的目录为: ${fullPath}`);
        fullPath = './static' + fullPath
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                console.log(404, err);
                res404 = fs.readFileSync('./static/404.html')
                response.writeHead(404, {'Content-Type': 'text/html;charset=utf8'});
                response.end(res404)
            }
            let mime = getMime(extName)
            response.writeHead(200, {'Content-Type': `${mime};charset=utf8`}); // 根据后缀名找到对应的MIME返回，避免了写死html导致的js、css的不可解析
            response.end(data);
        })
    }


    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');