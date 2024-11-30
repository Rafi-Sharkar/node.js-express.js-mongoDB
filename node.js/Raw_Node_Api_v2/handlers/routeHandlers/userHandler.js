/*
* Title: User handler 
* Description: handling user method get, post, put, delete    
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies
const data = require('../../lib/data')
const {hash} = require('../../helpers/utilities')
const { parseJSON } = require('../../helpers/utilities')

// module scaffolding
const handler = {}

handler.userHandler = (requestProperties, callBack) => {
    const acceptedMethods = ['get','post','put','delete']
    if(acceptedMethods.indexOf(requestProperties.method) > -1){
        handler._users[requestProperties.method](requestProperties,callBack)
    }else{
        callBack(405)
    }
}

// module scaffolding for users private fild
handler._users = {}

// task of private user
// post method
handler._users.post = (requestProperties,callBack) => {
    const firstName = typeof(requestProperties.body.firstName) === 'string' && requestProperties.body.firstName.trim().length>0?requestProperties.body.firstName : false;
    const lastName = typeof(requestProperties.body.lastName) === 'string' && requestProperties.body.lastName.trim().length>0?requestProperties.body.lastName : false;
    const phone = typeof(requestProperties.body.phone) === 'string' && requestProperties.body.phone.trim().length===11?requestProperties.body.phone : false;
    const password = typeof(requestProperties.body.password) === 'string' && requestProperties.body.password.trim().length>8?requestProperties.body.password : false;
    const condition = typeof(requestProperties.body.condition) === 'boolean' ?requestProperties.body.condition : false;

    if (firstName && lastName && phone && password && condition){
        // make sure that the user doesn't already exists
        data.read('users', phone, (err)=>{
            if(err){
                let userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    condition
                }
                // store the user to database
                data.create('users', phone, userObject, (err1)=>{
                    if(!err1){
                        callBack(200, {
                            message: "User is successfully created"
                        })
                    }else{
                        callBack(500, {error: "Could not create user"})
                    }
                })
            }else{
                callBack(500, {
                    error: "There are a problem in server side, user does exist"
                })
            }
        })

    }else{
        callBack(400, {
            error: "You have a problem in your request(at if else statement)"
        })
    }
}

// get method
handler._users.get = (requestProperties, callBack) => {
    // check the phone number if valid
    const phone = typeof(requestProperties.queryStringObject.phone) === 'string' && requestProperties.queryStringObject.phone.trim().length === 11 ? requestProperties.queryStringObject.phone : false;

    if (phone){
        // look up the user
        data.read('users', phone, (err, u)=>{
            const user = {...parseJSON(u)};
            if(!err && user){
                delete(user.password)
                callBack(200, user)                
            }else{
                callBack(404,{
                    error: "Requested user was not found"
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
handler._users.put = (requestProperties, callBack) => {
    const firstName = typeof(requestProperties.body.firstName)==='string' && requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;
    const lastName = typeof(requestProperties.body.lastName)==='string' && requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;
    const phone = typeof(requestProperties.body.phone)==='string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;
    const password = typeof(requestProperties.body.password)==='string' && requestProperties.body.password.trim().length > 8 ? requestProperties.body.password : false;

    if(phone){
        if(firstName || lastName || password){
            // lookup the user
            data.read('users', phone, (err, uData)=>{
                const userData = { ...parseJSON(uData)}
                if(!err && userData){
                    if(firstName){
                        userData.firstName = firstName
                    }
                    if(lastName){
                        userData.lastName = lastName
                    }
                    if(password){
                        userData.password = hash(password)
                    }

                    // store to database
                    data.update('users', phone, userData, (err1)=>{
                        if(!err1){
                            callBack(200, {
                                message: "User was updated successfully"
                            })
                        }else{
                            callBack(500, {
                                error: "There was a problem in server side"
                            })
                        }
                    })
                }else{
                    callBack(400, {
                        error: "There was a problem in server side"
                    })
                }
            })
        }else{
            callBack(400, {
                error: "You have a problem in your request"
            })
        }
    }else{
        callBack(400, {
            error: "Invalid phone number. plz try again"
        })
    }
}

// delete method
handler._users.delete = (requestProperties, callBack) => {
    // check the phone number if valid
    const phone = typeof(requestProperties.queryStringObject.phone)==='string' && requestProperties.queryStringObject.phone.trim().length===11 ? requestProperties.queryStringObject.phone : false

    data.read('users', phone, (err, uData)=>{
        if(!err,uData){
            data.delete('users', phone, (err1)=>{
                if(!err1){
                    callBack(200, {
                        message: "User data is successfully deleted"
                    })
                }else{
                    callBack(404, {
                        error: "Server phoblem"
                    })
                }
            })
        }else{
            callBack(404, {
                error: "Your requested phone number not found"
            })
        }
    })
}


module.exports = handler