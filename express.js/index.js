const express = require('express')

const app = express()
const admin = express()

app.set('view engine', 'ejs')

// app.locals is local variables within the application. which we can use entire application.
app.locals.title = "My app"
app.locals.port = 3000

// routing
// app.get('/', (req,res)=>{
//     console.log(app.mountpath)      // return the path where this app is mount
//     res.send("This is Public dashboard")
// })

//  call parent of parant app
// admin.on('mount',(parent)=>{
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
//   })

// app.use('/admin', admin)
// admin.get('/',(req,res)=>{
//     console.log(admin.mountpath)

//     res.send("This is admin dashboard")
// })
  
// Application methods
// app.all()
app.all('/',(req, res)=>{
    res.send('welcome to application home')
})

// app.disable and app.enable .parameter would choose from express Application Settings
app.enable('case sensitive routing')
app.disable('env')

// there have 2type of use of app.get(). one respons get method asuseal. another one is to get setting which set by set method
app.set('title', 'public dashboard')
app.get('title') 

// app.param()
app.get('/user/:id',(req,res)=>{
    console.log(req.userDetails)
    res.send('Welcome to application user')
})

app.param('id', (req, res, next, id)=>{
    const user = {
        uID: id,
        name: 'Rafi Sharkar'
    }
    req.userDetails = user
    next()
})      // this is middleware. it happened before get app gose to callBack


// app.path()
const blog = express()
const blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path())         // return => // ''
console.dir(blog.path())        // return => // '/blog'
console.dir(blogAdmin.path())   // return => // '/admin'

// app.route()
    /*
app.get('/rafi/sharkar/777',(req,res)=>{
    res.send('welcome to application home get')
})
app.post('/rafi/sharkar/777',(req,res)=>{
    res.send('welcome to application home post')
})
app.put('/rafi/sharkar/777',(req,res)=>{
    res.send('welcome to application home put')
})
    */

// we can write above as
app.route('/rafi/sharkar/777')
    .get((req,res)=>{
        res.render('pages/about')
    })
    .post((req,res)=>{
        res.send('welcome to application home post')
    })
    .put((req,res)=>{
        res.send('welcome to application home put')
    })

// app.engine



app.listen(app.locals.port,()=>{
    console.log(app.locals.title)
    console.log(`Server start at ${app.locals.port}`)
})


