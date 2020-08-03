var fs = require('fs')
const http = require('http');
const path = require('path')
const url = require('url')




function getMime(extName) {
    objStr = fs.readFileSync('./static/mimes.json')
    var mimes = JSON.parse(objStr)
    return mimes[extName]
}

function static (request, response, staticPath) {
    // 获取请求地址
    let reqUrl = url.parse(request.url).pathname // 避免了GET传参导致reqUrl带了参数找不到资源
    let fullPath = reqUrl === '/' ? '/index.html' : reqUrl
    console.log('拿到的url：', fullPath);
    // 获取请求文件后缀名
    let extName = path.extname(fullPath) // 后缀名，例如 '.html'   '.jpeg'

    // fs读文件
    if (reqUrl != '/favicon.ico') {
        fullPath = './' + staticPath + fullPath
        try {
            data = fs.readFileSync(fullPath)
            if (data) {
                let mime = getMime(extName)
                response.writeHead(200, {'Content-Type': `${mime};charset=utf8`}); // 根据后缀名找到对应的MIME返回，避免了写死html导致的js、css的不可解析
                response.end(data);
            }
        }catch (err) {

        }
    }
}

exports.getMime = getMime

exports.static = static