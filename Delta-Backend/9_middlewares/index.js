import { log } from "console";
import express from "express";

const app = express();




//  Middleware
app.use((req, res, next) => {
    console.log("Logging...");
// next();
// console.log("Logging... this is after next "); // we can write any thing after next but it is not good  practice // next is condider as the end of the middleware //or inseted we will use 
return  next()
});

app.use((req, res, next) => {
    console.log("Logging2323...");
next();
});
//  the above will run every time irespective of the route or is ther is error aany thing it willrun 

// app.use((req, res, next) => {
//     req.time = Date.now().toString();
//     console.log(req.method , req.path, req.hostname,req.time);
//     next();
// })

//  middlware ka kam response bhjena nahi hota hai , vo bas chizmo ko check ya rerquest kuch perfrom karne keliye  hume next use  karte hai 
// middlware hamesa top pe likha hota hai 


// koi specific path ke liye middleware create 
app.use("/users", (req, res, next) => {
    console.log("Users middleware");
    next();
})

// middleware as a function in routes
let logger = ((req, res, next) => {
    req.time = Date.now().toString();
    console.log(req.method , req.path, req.hostname,req.time);
    next();
})


app.get("/",logger , (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
}); 



// app.get("/", (req, res) => {
//     console.log("Hello World!");
    
//     res.send("Hello World!");
// }); 


// error handling middlware 
app.use( (req, res) => {
    res.send("page not found");
})


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})