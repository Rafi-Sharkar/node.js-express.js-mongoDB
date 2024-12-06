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

//  call parent of parant app
admin.on('mount',(parent)=>{
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
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
