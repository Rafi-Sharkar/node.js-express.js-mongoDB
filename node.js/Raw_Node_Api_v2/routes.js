/*
* Title: Routes 
* Description: Application Routes 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')
const { userHandler } = require('./handlers/routeHandlers/userHandler')
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler')

// module scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler

}

module.exports = routes