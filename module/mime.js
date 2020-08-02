var fs = require('fs')

objStr = fs.readFileSync('./static/mimes.json')
var mimes = JSON.parse(objStr)

function getMime(extName) {
    return mimes[extName]
}

exports.getMime = getMime

// console.log(getMime('.html'));