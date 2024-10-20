import express from "express";

// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();

// app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})




//?   Error handler  create at lasts 

app.get("/about", (req, res,next) => {
    try {
        res.send(hello )
    } catch (error) {
        next(error);
    }
})
app.use(( err ,req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.log(statusCode);
    res.status(statusCode).send(err.message);
    
})


app.listen(3000, () => {
    console.log("Server is running on port 3000"); 
});
