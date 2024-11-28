
// dependency
const url = require('url')
const { StringDecoder } = require('string_decoder')
const routes = require('../Part_1/routes')
const {notfoundHandler} = require('../Handlers/routeHandlers/notfoundHandler')

// module scaffolding
const handler = {}

handler.handleReqRes = (req,res)=>{
    // request handle

    // get the url and parse it
    const parsedUrl = url.parse(req.url, true)
    // console.log(parsedUrl)  // check what are in parsedUrl

    const path = parsedUrl.pathname;
    // console.log(path)

    const trimedPath = path.replace(/^\/+|\/+$/g, '')   // this is ragular experasion. topic of theory of computation(automata)
    // console.log(trimedPath)

    const method = req.method.toLowerCase()     // see the method(get, post, copy, put, delete, option, Link)
    // console.log(method)

    const queryStringObject = parsedUrl.query    // after the '?' all string
    // console.log(queryStringObject)

    const headerObject = req.headers;       // it give all mata data
    // console.log(headerObject)

    const requestProperties = {
        parsedUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headerObject
    }

    // req.method = body
    const decoder = new StringDecoder( 'utf-8' )

    // to store post from user
    let realData = ''

    const choosenHandler = routes[trimedPath] ? routes[trimedPath] : notfoundHandler;



    req.on('data', (buff)=>{
        realData += decoder.write(buff)
    })

    req.on('end',()=>{
        realData += decoder.end()
        
        // choosenHandler 
        choosenHandler(requestProperties,(statusCode, payload)=>{
            statusCode = typeof(statusCode) === 'number'? statusCode: 500;
            payload = typeof(payload) === 'object'? payload: {}
    
            const payloadString = JSON.stringify(payload)
    
            // return the final response
            res.writeHead(statusCode)
            res.end(payloadString)
    
        })
    })

}

module.exports = handler;