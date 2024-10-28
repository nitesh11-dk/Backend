import mongoose from "mongoose";


mongoose
// .connect('mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh');
.connect('mongodb://localhost:27017/test');

const db = mongoose.connection; 

db.on('error', (err)=>{
console.log(err)
});

db.on('open', ()=>{
    console.log('Database connected')
})

export default db;