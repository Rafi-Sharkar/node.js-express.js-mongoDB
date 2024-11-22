const http = require('http')

// this server object is event emitter.
const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.write("hellow, Rafi Sharkar\n");
        res.write("this is Home page\n");
        res.write("bye bye...");
        res.end()
    }
    else if(req.url ==='/blog'){
        res.write("hellow, Rafi Sharkar\n");
        res.write("this is Blog page\n");
        res.write("bye bye...");
        res.end()
    }
    else if(req.url ==='/about'){
        res.write("hellow, Rafi Sharkar\n");
        res.write("this is About page\n");
        res.write("bye bye...");
        res.end()
    }
    else{
        res.write("Page not found\n");
        res.end()
    }

})

// we are create 3000 port. we can create multiple server
server.listen(3000)

console.log("listening on port 3000")



