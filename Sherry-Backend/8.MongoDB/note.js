//  ? offline database

// import mongoose from "mongoose";

// mongoose.connect('mongodb://localhost:27017/test');

// const db = mongoose.connection; 

// db.on('error', (err)=>{
// console.log(err)
// });

// db.on('open', ()=>{
//     console.log('Database connected')
// })

// export default db;

//  ? online  
//  ? M-1 
// import mongoose from "mongoose";
// mongoose
// .connect('mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh')
// .then(()=>{
//     console.log('Database connected')
// });

// ? M-2 
// import mongoose from "mongoose";
// mongoose
// .connect('mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh');
// const db = mongoose.connection; 
// db.on('error', (err)=>{
// console.log(err)
// });
// db.on('open', ()=>{
//     console.log('Database connected')
// })
// export default db;

// ? sepeation of concern 
// like alag alga folder me code lijha hai 

//  ? mongodb schema 
