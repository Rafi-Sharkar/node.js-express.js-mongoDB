/*
* Title:  
* Description:  
* Author: Rafi Sharkar 
* Date: dd/mm/2025
*/

// dependencies
const http = require('http')
const url = require('url')

// app object - module scaffolding
const app = {}

// configuration
app.config = {
    prot: 3000,
}

// create server and listering that server at "app.config.port" or 3000 port 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.prot, ()=>{
        console.log(`listen to port ${app.config.prot}`)
    })
}

// handle Request Response inside the server
app.handleReqRes = (req, res) => {
    // request handling
        // get the url and parse it
        const parseUrl = url.parse(req.url, true)
        console.log(parseUrl)

        // take the pathname form parsUrl
        const path = parseUrl.pathname;
        // trimed the path
        const trimedPath = path.replace(/^\/+|\/+$/g, '')

    // response handling
    
}

app.createServer()