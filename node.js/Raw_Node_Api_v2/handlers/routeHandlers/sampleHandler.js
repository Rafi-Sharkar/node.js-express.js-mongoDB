/*
* Title: Sample handler 
* Description: Sample handlere 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// module scaffolding
const handler = {}

handler.sampleHandler = (requestProperties, callBack) => {
    console.log(requestProperties)

    callBack(200, {
        message: "This is a sample url rafi"
    })
}

module.exports = handler;