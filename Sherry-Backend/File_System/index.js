// 46  // File System 

//  coding with fs module 

// To use the callback and sync APIs:
// cjs 
// const fs = require('node:fs');

// ? esm 
import * as fs from 'fs';

// fs module is used to deal with files and folders.

//  write files 
//  read file 
//   update file
//  append file 
//  folder creattion 
//  delete file 
//  copy file 
//  mv file 
//  rename file


//  ? write files 

// fs.writeFile('./test.txt', 'hello world', (err) => {
//  if(err) console.log(err) ;
//  else console.log('file created');
// })

// fs.writeFile('./test2.txt', 'hello world',()=>{
// }) // this will also work if you dont want to handle error and any reponse mesage , but callabck is neccessary to pass


// ?  read files 

fs.readFile('./test.txt'  ,"utf-8" , (err, data) => {
    if (err) console.log(err);
    // else console.log(data.toString());
    else console.log(data);
});
{/* <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>  hello wrold is written in hexadecimal , you can convert it to string by using toString()  [data.toString()]*/}
//  or you can pass in options as utf-8 after writing the file name that youwant to read 

// ? append file 
// existing file me kuch aur data add karna

fs.appendFile('./test.txt', '  --- hello Nitesh', (err) => {
    if (err) console.log(err);
    else console.log('file updated');
})
// agar file exist nahi karti hogi to vo create kar deta hai 

//  ? rename file 

fs.rename('./test.txt', './test1.txt', (err) => {
    if (err) console.log(err);
    else console.log('file renamed');
})