const { createReadStream } = require('fs')
const http = require('http')

const myRS = createReadStream(__dirname+'/bigdata.txt', 'utf-8')

// -> request is readable stream. -> respons is writeable stream.
const server = http.createServer((req, res)=>{
    res.write("<h1>Rafi Sharkar</h1>\n\n")
    myRS.pipe(res)
})

server.listen(3000)
console.log("Listening on port 3000")