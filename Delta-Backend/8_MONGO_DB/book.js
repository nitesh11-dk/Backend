import mongoose from "mongoose";

let url  = "mongodb://127.0.0.1:27017/amazon";


mongoose.connect(url).then(() => {
    console.log("connected mongodb successfully");
}).catch((err) => {
    console.log(err);
})

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: [1,"price should be greater than 1"]
    },
    discount:{
        type: Number,
        default : 0
    }
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({ title: "How to kill a monkey",
// author: "Monkey the chuusii",
// price: "12343" });

// book1.save().then((res) => {
//     console.log(res);
//     console.log("saved successfully");
// }).catch((err) => {
//     console.log(err);
// })

// Book.findOne().then((res) => {
//     console.log(res);
// })

//  sCHEMA ME YANDER  jo vhi rules define karte hai vo shrif insert karte time apply karti hai update karte time nhai  so hume updations ke liye vhi validations lagnaa padega 
// so in thiers option you should use runvalidator to true 

Book.findByIdAndUpdate("6721a632527b9fe2476395a9", { price: 34 }, { runValidators: true ,new: true }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err.errors.price.message);
})
