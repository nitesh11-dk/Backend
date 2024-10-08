import express from 'express'
const app = express()

import path from 'path';
import { fileURLToPath } from 'url';


// Create __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.set("view engine" ,"ejs")
// by  deault express ne ejs ko require kar liya hota hai 
//  view means template 
// hum ejs me response ko send nahi karte hai render karte hai 
//   views wale folder me yander sare ejs wale files hote hai  by deafult
//  by deafult express views wale folder me hi index.ejs ya koi vhi ejs wale files ko find karega
//  jaha se server run huya hai waha se find karne ka try karta hai ye error se bachne ke liye we can use  path 
app.set("views" , path.join(__dirname , "views")) 
console.log(path.dirname(fileURLToPath(import.meta.url)))



// Interpolation Syntax
// Interpolation refers to embedding expressions into marked up text.

// <% 'Scriptlet' tag, for control-flow, no output
// <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%= Outputs the value into the template (HTML escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it



app.get("/" , (req,res)=>{
  let rolldice  = Math.floor(Math.random()*6)+1 ;
  let followers = ["alice","bob","charlie" ,"dan"]
  res.render("index" , {rolldice , followers})
})

app.get("/insta/:username" , (req,res)=>{
    let {username}  = req.params
    res.render("insta" , {username})

})



app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})