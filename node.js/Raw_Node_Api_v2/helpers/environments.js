/*
* Title: Environment 
* Description: handle all environment related things 
* Author: Rafi Sharkar 
* Date: 29/11/2024
*/

// dependencies

// module scaffolding
const environment = {}

environment.staging = {
    port: 3000,
    envName: "staging",
    secretKey: 'kboahkajdf'
}

environment.production = {
    port: 5000,
    envName: "production",
    secretKey: 'ibjoijrjlaf'
}

// determine which encironment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string'? process.env.NODE_ENV : "staging"

// export corresponding environment object
const environmentToExport = typeof(environment[currentEnvironment]) === 'object'?environment[currentEnvironment]: environment.staging;

module.exports = environmentToExport