
// ?  ExpressJs 

// Library VS Framework
//*  Library
// A library is a collection of pre-written code that can be used to perform specific tasks., have more control in library
// eg - axios
//*  Framework
//?  A framework is a set of pre-written code that provides a structure for developing software applications , more control hold by framewrork only 
// eg - express


//    ? Express
// A Node.js web application framework that helps us to make web applications It is used for server side programming.
// 1 .  listen for imncomimng requests 
// 2   parse 
// 3 . match reponse with routes 
// 4 . suitable reponse for request

// * Ports  : -  are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// Hmmm… can't reach this page localhost refused to connect. --> if server is not running or not listening , and we get this 

//  if server is listiening , but do not define any route we get this { // ! Cannot GET / }

// !  using require 
// const express = require('express')
// const app = express() 

//  ! using import
import express from 'express'
const app = express()


app.get('/' , (req,res)=>{
    res.send("Hello Express")
})


// ? app.use koi vhi requesti get post , put , patch ,delete  ,sare request ke liye ye send karega 
app.use("/",(req,res)=>{
    res.send("Hello Express kese ho universally ")
}) 


app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})

app.get('/' , (req,res)=>{
    // console.log(req)
    res.send("Helloe kese ho ")
    res.send("<h1>Hello Express</h1>")
})
// here it will get error beaucse hum yak route par yakhii reponse bhej sakte hai so 


