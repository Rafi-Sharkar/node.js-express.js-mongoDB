/*
* Title: Routes 
* Description: Application Routes 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler')

// module scaffolding
const routes = {
    sample: sampleHandler,

}

module.exports = routes