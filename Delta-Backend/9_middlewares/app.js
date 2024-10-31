
// Middleware
// It is an intermediary
// Request
// in Express
// Middleware in Express are functions that come into play
// after the server receives the request and before the
// response is sent to the client.
// Response


// Middleware
// Common middleware functions :
// • methodOverride
// • bodyParser
// • express.static
// • express.urlencoded
// app. use(express. extended:
// app. use (express. static (path. rname,
// true
// "'public")) ) ;

//  Mddleware can access the req, res and next 
//  chaninging can be possible in middleware 
//  yak middleware dursare middlew ware ko control pas karta hai 


// What do middlewares do?
// Middleware functions can perform the following tasks:
// Execute any code.
// •
// Make changes to the request and the response objects.
// • End the request-response cycle.
// • Call the next middleware function in the stack.

// Our 1st Middleware
// app.use( middleware )
// app.use(() {
// console. I am a middleware");
// using req & res object in middleware
// req, res) {
// console. I am a middleware");
// res. send ( "bye") ;

// Using next
// The next middleware function is commonly denoted by a variable named next.
// app. res, next)
// console. log('Time: ' ,
// Date. now())
// next()
// If the current middleware function does not end the request-response
// cycle, it must call next() to pass control to the next middleware function.


// Creating Utility Middleware
// Logger
// app.use( req, rest
// next) {
// req. responseTime = new )
// console. log ( req.method, req. path, req. responseTime,
// next( ) ;
// req. hostname) ;