
// ? Templating
// * EJS (Embedded JavaScript templates)
// * EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.



app.set("view engine" ,"ejs")
// by  deault express ne ejs ko require kar liya hota hai 
//  view means template 
// hum ejs me response ko send nahi karte hai render karte hai 
//   views wale folder me yander sare ejs wale files hote hai  by deafult
//  by deafult express views wale folder me hi index.ejs ya koi vhi ejs wale files ko find karega
//  jaha se server run huya hai waha se find karne ka try karta hai ye error se bachne ke liye we can use  path 

// app.set("view engine" ,"ejs") // shrif yitana likhne se deafult views wale folder me ejs wale files  ko find karega , if and only if we are running that server from the root directory agar kahi bhar se kaare ahai to we should change the name of the folder or we can keep views only 

// * to rename this  to deafult folder we use __dirname to get the path of that file 
// ?with CJS 
const path = require('path')
app.set("views" , path.join(__dirname , "views")) 

//?  with ESM
import path from 'path';
import { fileURLToPath } from 'url';
// Create __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views" , path.join(__dirname , "views")) 

// import.meta.url: Provides the URL of the current ES module, indicating its location.
// fileURLToPath(): Converts the URL to a usable file path format for Node.js.
// path.dirname(): Extracts the directory name from the file path, allowing access to files relative to the module's location.


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


// ? to use for loop and if else in ejs 


// app.get("/" , (req,res)=>{
//     let rolldice  = Math.floor(Math.random()*6)+1 ;
//     let followers = ["alice","bob","charlie" ,"dan"]
//     res.render("index" , {rolldice , followers})
//   })
  

// <!-- <%  if(rolldice == 6){ %>
//     <h2>Nice ! you have get 6 </h2>
//     <%  } %> -->

//     <% for (let follower of followers){ %>

// <li><%= follower %></li>
// <%} %>



// ? to send data from js to ejs 

// app.get("/" , (req,res)=>{
//     res.render("index", {title:"hello" , name:"apple"})

// })

{/* <h1> this is  <%= title %> </h1>
    <h1> this is  <%= name %> </h1> */}

    
    //  ? how to send static files via express 
    
//   if you want to send static files from your server like js and css 
//  app.use(express.static('foldername'))
// shrif yitana likhne se deafult public wale folder me ejs wale files  ko find karega , if and only if we are running that server from the root directory agar kahi bhar se kaare ahai to we should change the name of the folder or we can keep public only 

// app.use(express.static(path.join(__dirname, 'public')))
// ! if youare using esm then use this setps to get the __dirname name  
//  import path from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));


// to use tha files we can 
{/* <link rel="stylesheet" href="/style.css"> // note that no need to write /public becuase in app we are  specifically using public or telling public */}
// app.use(express.static(path.join(__dirname, 'public')))
//  if there are subdir in public folder supoose you have style.css in sub folder in paren public folder  , so there are two  methods that you can use 
// 1. app.use(express.static(path.join(__dirname, 'public/css')))
{/*  2. <link rel="stylesheet" href="/css/style.css"></link> */}



//  ! INCLUDES 
//  use to crate a sub templates 
// <%- include("includes/header.ejs") %> // first you need to crete that hear.ejs in that includes forlder 