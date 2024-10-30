
//  Bjson --> Binary Json 

// JSON --> text based , space inefficient 

// difference JSON and BSON 

// Collections
// Document : Mongo stores data in form of documents (BSON docs)
// Collection : MongoDB stores documents in collections.

// INSERT in DB
// insert0ne
// Inserts a single document into a
// db. collection. insertOne()
// collection.
// show collections
// db.student.insert0ne( ( name: "adam", marks: 79 ) )
// db.student.find( )
// If a collection does not exist, MongoDB creates the
// collection when you first store data for that collection.


//  app koi vhi document direct add kar sakte ho , like koi aur key value pari kuch chi direclty withour creating any schema 


// INSERT in DB
// insertMany (array of documents)
// db.student.insertMany( [ { name: "bob", marks: 65 ), { name: "eve
// ", • "Delhi"
// City:
// db. collection. insertMany()
// Inserts multiple documents into a collection.

// FIND in DB
// db.collection.find( ) llreturns everything
// for specific queries
// db.collection.find( { key: value ) ) -- [] --> retrun  cursor --> reference to originaal data  

// db.coIlection.find0ne( { key: value ) ) -- {} --> its retrun the document or the data 

// db.student.find({name:"nitesh",age:18}) can pass multiple condition 


// FIND in DB
// Query Operators
// Q. Find students where marks
// db. student. find( {marks: {Sgt: 75}} )
// waha1521@gmail.com
// Q. Find students who live in Delhi or Mumbai
// db.student . find( {city: {Sin: ["Delhi", •gumbai"]}} )
// Q. Find students who scored > 75 or live in Delhi
// db. student. find( {$or: t {marks: {Sgt: 75}},
// {City:"delhi"}}]


// UPDATEin DB
// update0ne
// db . ectinn. update-One ( )
// at a filter
// db.collection.updateOne( <filter> , cupdate>, coptions> )
// db. student.updateOne( {name: "adam"}. {Sset: {marks :99}} )

// UPDATE in DB
// Update Operators
// $addFieIds
// Sset
// $project
// Sunset
// $reptaceRoot
// SreplaceWith



// Nesting
// _id:
// • • farah',
// name.
// performance: { marks: 88, grade: 'A'
// to find
// db. student. findOne( {"performance.marks•:
// 88} )


// DELETE in DB
// delete0ne
// db.collection.deIeteOne(filter , coptions> )
// deleteMany
// db.collection.deleteMany(filter , coptions> )
// db.collection.deleteMany({} ) --> collection delte ho jayega 
// db.dropDatabase( )

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MONGOOSE WITH JS 

// Mongoose
// A library that creates a connection between MongoDB & Node.js JavaScript Runtime
// Environment
// It is an ODM (Object Data Modeling) Library.


// Schema
// Schema defines the shape of the documents within that collection.
// const userSchema = new mongoose.
// name: String,
// email: String,
// age: Number,


    // Models
    // Model in mongoose is a class with which we construct documents.
    // const User = mongoose. userSchema);


//     INSERT
// Inserting One
// userl.save( )
// user2.save()
// const userl = new User({ name: "Adam",
// const user2 = new User({ name
// //to save in DB
// //to save in DB
// : "Eve",
// email: "adar€yahoo. in" ,
// email:
// "eve@goog le. com" ,
// age:
// age:
// 48 Y);
// 48 Y);


// INSERT
// Inserting Multiple
// User. insertMany( [
// { name: "Tony", email:
// { name: "Bruce", email:
// { name: "Peter", email:
// J) . then( (data) {
// console. log( data);
// "tony@gmail.con", age: 50
// "bruceegnail.con", age: 47 y,
// "peter@gmail.com", age: 3e



// Note
// Mongoose uses Operation Buffering
// Mongoose lets you start using your models immediately, without
// waiting for mongoose to establish a connection to MongoDB.


// FIND
// Model.find() //returns a Query Object (thennable)
// *Mongoose Queries are not promises. But they have a .then( )
// User. {
// console. log (data);
// User. age: { $gte:
// 47 {
// console. log( data) ;



// UPDATE
// Model.updateOne( )
// User. name: "Bruce
// console. tog ( res) ;
// Model. updateMany( )
// { $gt:
// User. age:
// console. log ( res) ;
// Y);
// { age:
// 49 Y). {
// 45 } , {
// age:
// 45 Y). then( (res) {

// UPDATE
// Model. findOneAndUpdate( )
// User. age: { $gt:
// console. tog( res) ;
// User. name:
// (data) {
// console. tog (data);
// Model. findBy/dAndUpdate( )
// 45
// "Tony
// { age:
// 45 {
// " { age:
// 60 Y,
// { new:
// true



// DELETE
// Model.deleteOne() //returns count
// name: "Adam" Y) . then( ( res) => {
// console. tog( res) ;
// Model.deleteMany() //returns count
// User. deleteMany({ age: { Sgt: 40 } }).then((res) {
// console. log ( res) ;

// Schema Validations
// Basically, Rules for Schema
// const bookSchema mongoose. Schema({
// titte: (
// type: String,
// required: true,
// author: {
// type: String,
// price: (
// type: Number,