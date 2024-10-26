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







app.get("/", (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) return res.send("Error reading files.");
        res.render("index.ejs", { files });
    });
})


app.get('/create', (req, res) => {
  const today = new Date();
const fn = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

fs.writeFile(`./files/${fn}`, 'hello', (err) => {
  if (err) return res.send("Error creating the file.");
  res.redirect("/");
});
});


app.get("/edit/:filename", (req, res) => {
  const  filename = req.params.filename;  
  fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
    if (err) return res.send("Error reading file.");
    res.render("edit.ejs", { filename, data });
  });
})

app.post("/update/:filename", (req, res) => {
  const filename = req.params.filename;   
  fs.writeFile(`./files/${filename}`, req.body.filedata, (err) => {
  if (err) return res.send("Error updating file.");
  });
  res.redirect("/");
})

app.get('/view/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
      if (err) return res.send("Error reading file.");
      res.render("view.ejs", { filename, data });
  });
});

app.get('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.unlink(`./files/${filename}`, (err) => {
    if (err) return res.send("Error deleting file.");
    res.redirect("/");
  });
});





     











app.listen(4000, () => {
    console.log('Server started on port http://localhost:4000');
});