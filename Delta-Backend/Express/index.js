// const express = require('express')
// const app = express() 

import express from 'express'
const app = express()


// app.use("/",(req,res)=>{
//     res.send("Hello Express kese ho universally ")
// })

// for promsie we are using  (resolve, reject ) rememeber 


app.get('/' , (req,res)=>{
    // console.log(req)
    res.send("Helloe kese ho ")
    res.send("<h1>Hello Express</h1>")
})

app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})