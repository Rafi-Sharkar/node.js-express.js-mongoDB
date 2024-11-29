/*
* Title:  
* Description:  
* Author: Rafi Sharkar 
* Date: dd/mm/2025
*/

// dependencies
const http = require('http')
const { handleReqRes } = require('./helpers/handleReqRes')

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






app.createServer()