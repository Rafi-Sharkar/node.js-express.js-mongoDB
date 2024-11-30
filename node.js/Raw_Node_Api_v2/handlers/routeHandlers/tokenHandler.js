/*
* Title: Token handler 
* Description: handle token related routes
* Author: Rafi Sharkar 
* Date: 30/11/2024
*/

// dependencies
const data = require('../../lib/data')
const {hash} = require('../../helpers/utilities')
const {createRandomStr} = require('../../helpers/utilities')
const { parseJSON } = require('../../helpers/utilities')


// module scaffolding
const handler = {}

handler.tokenHandler = (requestProperties, callBack) => {
    const acceptedMethods = ['get','post','put','delete']
    if(acceptedMethods.indexOf(requestProperties.method) > -1){
        handler._token[requestProperties.method](requestProperties,callBack)
    }else{
        callBack(405)
    }
}

// module scaffolding for token private fild
handler._token = {}

// task of private token
// post method
handler._token.post = (requestProperties,callBack) => {
    const phone = typeof(requestProperties.body.phone)==='string' && requestProperties.body.phone.trim().length ===11? requestProperties.body.phone : false
    const password = typeof(requestProperties.body.password)==='string' && requestProperties.body.password.trim().length >8? requestProperties.body.password : false

    if(phone && password){
        data.read('users', phone, (err, uData)=>{
            const userData = { ...parseJSON(uData)}
            const hashPass = hash(password)

            // console.log(`input pass: ${hashPass}`)
            // console.log(`Data pass: ${userData.password}`)
            if(!err && userData.password === hashPass){
                let tokenID = createRandomStr(20)
                let expire = Date.now() + 60*60*1000
                let tokenObject = {
                    phone,
                    'id': tokenID,
                    expire
                }

                // store the token
                data.create('tokens', tokenID, tokenObject, (err1)=>{
                    if(!err1){
                        callBack(200,tokenObject)
                    }else{
                        callBack(500, {
                            error: "there was a problem in the server side"
                        })
                    }
                })
            }else{
                callBack(400, {
                    error: "Password doesn't match."
                })
            }
        })
    }else{
        callBack(400, {
            error: "You have a problem in your request(error at phone & password validation)"
        })
    }
}

// get method
handler._token.get = (requestProperties, callBack) => {
   // check the token id if valid
   const id = typeof(requestProperties.queryStringObject.id) === 'string' && requestProperties.queryStringObject.id.trim().length ===20 ? requestProperties.queryStringObject.id : false;

   if (id){
       // look up the user
       data.read('tokens', id, (err, t)=>{
           const token = {...parseJSON(t)};
           if(!err && token){
               callBack(200, token)                
           }else{
               callBack(404,{
                   error: "Requested token was not found"
               })
           }
       })
   }else{
       callBack(400, {
           error: "request is not valid"
       })
   }    
}

// put method
handler._token.put = (requestProperties, callBack) => {
    const id = typeof(requestProperties.body.id)==='string' && requestProperties.body.id.trim().length ===20? requestProperties.body.id : false
    const extend = typeof(requestProperties.body.extend)==='boolean' && requestProperties.body.extend === true? requestProperties.body.extend : false

    if(id && extend){
        data.read('tokens',id, (tokenData)=>{
            let tokenObject = {...parseJSON(tokenData)}
            if(tokenObject.expire>Date.now()){
                tokenObject.expire = Date.now() + 60*60*1000;
                // store the updated token
                data.update('tokens', id, tokenObject, (err1)=>{
                    if(!err1){
                        callBack(200,{
                            message: "Token expire is updated"
                        })
                    }else{
                        callBack(400, {
                            error: "There was server side error"
                        })
                    }
                })
            }else{
                callBack(400, {
                    error: "token is not expaired. not neet to update"
                })
            }
        })
    }else{
        callBack(400, {
            error: "There was a problem in your request"
        })
    }
}

// delete method
handler._token.delete = (requestProperties, callBack) => {
   const id = typeof(requestProperties.queryStringObject.id) === 'string' && requestProperties.queryStringObject.id.trim().length ===20 ? requestProperties.queryStringObject.id : false;
    
   if(id){
        data.read('tokens',id, (err, tData)=>{
            if(!err, tData){
                data.delete('tokens',id, (err1)=>{
                    if(!err1){
                        callBack(200, {
                            message:"Token is successfully deleted"
                        })
                    }else{
                        callBack(500, {
                            error: "Server problem"
                        })
                    }
                })
            }else{
                callBack(400, "Server problem")
            }
        })
   }else{
        callBack(400, {
             error: "Token ID is not valid"
    })
   }
}

handler._token.verify = (id, phone, callBack)=>{
    data.read('tokens', id, (err, tData)=>{
        const tokenData = {...parseJSON(tData)}
        if(!err && tokenData){
            if(tokenData.phone === phone && tokenData.expire>Date.now()){
                callBack(true)
            }else{  
                callBack(false)
            }
        }else{
            callBack(false)
        }
    })
}


module.exports = handler