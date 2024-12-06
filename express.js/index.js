const express = require('express')

const app = express()
const admin = express()

// app.locals is local variables within the application. which we can use entire application.
app.locals.title = "My app"
app.locals.port = 3000

// routing
app.get('/', (req,res)=>{
    console.log(app.mountpath)      // return the path where this app is mount
    res.send("This is Public dashboard")
})

app.use('/admin', admin)
admin.get('/',(req,res)=>{
    console.log(admin.mountpath)
    res.send("This is admin dashboard")
})

app.listen(app.locals.port,()=>{
    console.log(app.locals.title)
    console.log(`Server start at ${app.locals.port}`)
})

admin.listen(5000, ()=>{
    console.log('Server run on prot 5000')  
})