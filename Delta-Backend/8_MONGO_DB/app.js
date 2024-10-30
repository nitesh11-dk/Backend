import mongoose from "mongoose";

let url  = "mongodb://127.0.0.1:27017/test";


mongoose.connect(url).then(() => {
    console.log("connected mongodb successfully");
}).catch((err) => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:String
})

const User  = mongoose.model("User", userSchema);

//  here User is a class  

const user1 = new User({ name: "Kushwaha",
age: 48,
email: "adar€yahoo. in" }); //shrif  memory me create hora hai but save nahi hora hai so hume 

// user1.save().then((res) => {
//     console.log(res);
//     console.log("saved successfully");
// }).catch((err) => {
//     console.log(err);
// })

// User.insertMany([
//     { name: "Kushwaha",
//     age: 23,
//     email: "adarsadfsfsahoo. in" },
//     { name: "Kusdfsdfdasfshwaha",
//     age: 23,
//     email: "adasdfdsafs€yahoo. in" }
// ]).then((res) => {
//     console.log(res);
//     console.log("saved successfully");
// }).catch((err) => {
//     console.log(err);
// })

function tc(data){
    data.then((res) => { 
        console.log(res);   
    }).catch((err) => {
        console.log(err);
    })

}

// tc(User.find());
// tc(User.find({_id:"67219da79d78e0179b00db20"})); //--> []
// tc(User.findOne({_id:"67219da79d78e0179b00db20"})); --> {}
// tc(User.findById("67219da79d78e0179b00db20"));

// tc(User.updateOne({_id:"67219da79d78e0179b00db20"}, {name:"kushwaha"})); 
// tc(User.updateMany({age:{$lt:50}}, {age:18}));
// -- > here you are getting the meta data not the updated data 

// tc(User.findOneAndUpdate({_id:"67219da79d78e0179b00db20"}, {name:"Nitesh"})); // here the iisue is its first find then update , so we get old valeues so to get the new values you can use  
// tc(User.findOneAndUpdate({_id:"67219da79d78e0179b00db20"}, {name:"rakesh",age:24},{new:true}));

// tc(User.deleteOne({name:"Kushwaha"}));
// tc(User.deleteMany({age:18}));
// DELETE
// Model. findByldAndDelete(
// Model. findOneAndDelete( )


tc(User.find());
