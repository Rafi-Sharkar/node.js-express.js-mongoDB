const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write(`
                <html>
                    <head>
                        <title>Form</title>
                    </head>
                    <body>
                        <form method="post" action="/process">
                            <input  name="message" />
                        </form>
                    </body>
                </html>           
            `)
        
        res.write("Home");
        res.end()
    }
    else if(req.url === '/process' && req.method === 'POST'){

        req.on('data',(chunk)=>{
            console.log(chunk.toString())
        })
        
        res.write("process")

        res.end()
    }else{
        res.write("Page not found")
        res.end();
    }
})

server.listen(9000)
console.log("Server run on port 9000")