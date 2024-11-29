/*
* Title: Handle Request Response 
* Description: Handle Request and response 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies
const url = require('url')
const { StringDecoder } = require('string_decoder')  // we take a class StringDecoder from string_decoder module


// nodule scaffolding
const handler = {}

// handle Request Response inside the server
handler.handleReqRes = (req, res) => {
    // request handling
        // get the url and parse it
        const parseUrl = url.parse(req.url, true)
        // console.log(parseUrl)

        // take the pathname form parsUrl
        const path = parseUrl.pathname;
        // trimed the path
        const trimedPath = path.replace(/^\/+|\/+$/g, '')
        // method of request {get, post, put, delete, head, etc}
        const method = req.method.toLowerCase()
        // give qequest query of url or after "?" in url
        const queryStringObject = parseUrl.query
        // header means request matadata
        const headerObject = req.headers
        // this body is called payload, and frontend
        const decoder = new StringDecoder('utf-8')      // create a object of StringDecoder
        let realData = ''   // store all buffer string in realData
        req.on('data', (buffer)=>{
            realData += decoder.write(buffer)
        })
        req.on('end', ()=>{
            realData += decoder.end() //The stringDecoder.end() method is used to return all the remaining input stored in the internal buffer as a string. 
            console.log(realData)
            res.end("hay, lamiya baby.")
        })

        

    // response handling
    res.end("Respose Null")
    

    }

module.exports = handler