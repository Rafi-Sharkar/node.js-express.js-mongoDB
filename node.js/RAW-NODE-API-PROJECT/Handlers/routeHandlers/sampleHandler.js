

// scaffolding
const handler = {}

handler.sampleHandler = (requestProperties,callBack) => {
    console.log(requestProperties)

    callBack(200, {
        message: "This this sample Handler"
    })
}

module.exports = handler;