const express = require('express')

const app = express()

app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     console.log(res.headersSent)
//     res.render('pages/home',{
//         name: "Rafi Sharkar",
//         dept: "CSE"
//     })
//     console.log(res.headersSent)
//     res.status(403)

//     res.send("hellow Rafi")     // end with message "hellow Rafi".
//     res.end()                   // end without message.
// })

app.get('/about',(req,res)=>{
    res.format({
        'text/plain': ()=>{
            res.send('hi')
        },
        'text/html': ()=>{
            res.render('pages/about',{
                name: "Leo"
            })
        },
        'applicatoin/json': ()=>{
            res.json({
                message: "about"
            })
        },
        default: ()=>{
            res.status(406).send("Not acceptable")
        }
    })
})

app.get('/cookie',(req,res)=>{
    res.cookie('name','dept')
    res.location('/test')
    res.end()
})

app.listen(3000, ()=>{
    console.log("Server port 3000")
})