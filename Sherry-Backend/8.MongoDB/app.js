import express from "express";
import mongooseCollection from "./config/mongoose.js";
import userModel from "./models/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send("Hello World!");
}); 

// app.get('/create', async(req,res)=>{

//     let createUser = await userModel.create({
//         name: "Nitesh",
//         email: "nitesh@dk",
//         password: "nitesh"
//     }) // ye async hai 
//     console.log('user crated ');
//     res.send(createUser)
// })

app.post('/create', async(req,res)=>{
    let {name, email, password} = req.body;
    let createUser = await userModel.create({
        name ,
        email,
        password,
    }) // ye async hai 
    console.log('user created '); 
       res.send(createUser)
})

app.post('/user/:name', async(req,res)=>{
    userModel.findOne({name: req.params.name})
    .then((data)=>{
        res.send(data)
    })
})

app.get('/read', async(req,res)=>{
    // let user = await userModel.findOne({
    //     name: "Nitesh"
    // }) // for getting single data
    let users = await userModel.find()
    res.send(users);

})

app.get('/update', async(req,res)=>{
    // let user = await userModel.findOneAndUpdate({
    //     name: "Nitesh"
    // }, {
    //     name: "Nitesh Kumar"
    // }) 
    let user = await userModel.findOneAndUpdate({
        name: "Nitesh Kumar"
    }, {
        name: "Rakesh Kushwaha"
    },{new:true}) 
    res.send(user);// yaha appko old hii data milega so yuske liye 
})
app.get('/delete', async(req,res)=>{
    let user = await userModel.findOneAndDelete({
        name: "Rakesh Kushwaha"
    }) 
    res.send(user);
})


app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
})
