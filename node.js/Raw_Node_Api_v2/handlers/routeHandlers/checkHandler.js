/*
* Title: Check handler 
* Description: handling check url    
* Author: Rafi Sharkar 
* Date: 01/12/2024
*/

// dependencies
const data = require('../../lib/data')
const {hash} = require('../../helpers/utilities')
const { parseJSON } = require('../../helpers/utilities')
const tokenHandler = require('./tokenHandler')

// module scaffolding
const handler = {}

handler.checkHandler = (requestProperties, callBack) => {
    const acceptedMethods = ['get','post','put','delete']
    if(acceptedMethods.indexOf(requestProperties.method) > -1){
        handler._check[requestProperties.method](requestProperties,callBack)
    }else{
        callBack(405)
    }
}

// module scaffolding for users private fild
handler._check = {}

// task of private user
// post method
handler._check.post = (requestProperties,callBack) => {
    // validate input
    let protocol = typeof(requestProperties.body.protocol)==='string' && ['http','https'].indexOf(requestProperties.body.protocol)>-1 ? requestProperties.body.protocol : false;
    let url = typeof(requestProperties.body.url)==='string' && requestProperties.body.url.trim().length>0 ? requestProperties.body.url : false;
    let method = typeof(requestProperties.body.method)==='string' && ['get','post','put','delete'].indexOf(requestProperties.body.method)>-1 ? requestProperties.body.method : false;
    let successCode = typeof(requestProperties.body.successCode)==='object' && requestProperties.body.successCode instanceof Array ? requestProperties.body.successCode : false;
    let timeOutSeconds = typeof(requestProperties.body.timeOutSeconds)==='number' && requestProperties.body.timeOutSeconds%1 === 0 && requestProperties.body.timeOutSeconds>=1 && requestProperties.body.timeOutSeconds<=5 ? requestProperties.body.timeOutSeconds: false

    if(protocol && url && method && successCode && timeOutSeconds){
        
    }else(
        callBack(400, {
            error: "You have a problem in your request"
        })
    )

}

// used Authentication
// get method
handler._check.get = (requestProperties, callBack) => {

}

// used Authentication
// put method
handler._check.put = (requestProperties, callBack) => {

}

// used Authentication
// delete method
handler._check.delete = (requestProperties, callBack) => {
    
}


module.exports = handler