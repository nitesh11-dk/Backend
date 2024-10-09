import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import data from './Constants/data.json' assert { type: 'json' }; // it is woriking with lts version of node only v20.18.0



const app = express()

// Create __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine" ,"ejs")
app.set("views" , path.join(__dirname , "views")) 




// console.log(data)

app.get("/insta/:username" , (req,res)=>{
  let {username} = req.params ;
  res.render("insta" , {data: data[username]})

  
}
)



app.listen(3000 , ()=>{
    console.log("server is listening on the  port  3000")
})

// app.get("/" , (req,res)=>{
//   let rolldice  = Math.floor(Math.random()*6)+1 ;
//   let followers = ["alice","bob","charlie" ,"dan"]
//   res.render("index" , {rolldice , followers})
// })

// app.get("/insta/:username" , (req,res)=>{
//     let {username}  = req.params
//     res.render("insta" , {username})

// })
