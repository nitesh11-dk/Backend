
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
