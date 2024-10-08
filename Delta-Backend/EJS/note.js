
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


// to send data from js to ejs 

// app.get("/" , (req,res)=>{
//     res.render("index", {title:"hello" , name:"apple"})

// })

{/* <h1> this is  <%= title %> </h1>
    <h1> this is  <%= name %> </h1> */}
