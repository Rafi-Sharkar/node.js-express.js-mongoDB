

// scaffolding
const handler = {}

handler.notfoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties)
    callBack(404, {
        message: "Your requested page is not found"
    })
}

module.exports = handler;