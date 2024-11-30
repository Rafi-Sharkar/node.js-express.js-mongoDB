/*
* Title: Utilities
* Description: handle all utilities related things 
* Author: Rafi Sharkar 
* Date: 30/11/2024
*/

// dependencies
const crypto = require('crypto')
const encironment = require('./environments');
const { flatMap } = require('lodash');

// module scaffolding
const utilities = {}

utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.parse(jsonString)
    }catch{
        output = {};
    }
    return output
}

// hash string . not get understant
utilities.hash = (strPass) => {
    if(typeof(strPass) ==='string' && strPass.length>0){
        // console.log(encironment, process.env.NODE_ENV)
        const hash = crypto
        .createHmac('sha256', encironment.secretKey)
        .update(strPass)
        .digest('hex')
        return hash
    }
    return false
}

// create random string
utilities.createRandomStr = (strLen) => {
    let len = typeof(strLen)==='number' && strLen>0 ? strLen: false;

    if(len){
        const possibleChar = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let output = ''
        for(let i=1; i<=len; i+=1){
            const randomChar = possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
            output += randomChar;
        }
        return output
    }
    return false
}




module.exports = utilities