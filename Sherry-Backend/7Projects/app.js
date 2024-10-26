import express from 'express' ;
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app  =  express();



const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Create __dirname in ES modules
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/create', (req, res) => {
 
    const today = new Date();
  const fn = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  

  fs.writeFile(`./files/${fn}`, 'hello', (err) => {
    if (err) return res.send("Error creating the file.");
    res.send("File created and watching.");
  });


});



     











app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});