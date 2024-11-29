/*
* Title: notFound handler 
* Description: notFound handlere 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// module scaffolding
const handler = {}

handler.notFoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties)

    callBack(404, {
        message: "your requested URL was not found!!"
    })
}

module.exports = handler;