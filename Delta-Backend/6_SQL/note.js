// Constraints
// PRIMARY KEY
// FOREIGN KEY
// makes a column unique & not null but used only for one
// CREATE TABLE temp (
// id int not null,
// PRIMARY KEY (id)
// prevent actions that would destroy links between tables
// CREATE TABLE temp (
// cust_id int,
// FOREIGN KEY (cust_id) references customer(id)

// -- CREATE TABLE ussers (
//     -- id INT UNIQUE , 
//     -- age INT , 
//     -- name VARCHAR(30) NOT NULL ,
//     -- email VARCHAR(30) UNIQUE ,
//     -- followers INT DEFAULT 0 ,
//     -- following INT ,
//     -- CONSTRAINT CHECK (age >= 18) ,
//     -- PRIMARY KEY(id)
//     -- );
    
//     CREATE TABLE post (
//     id INT  PRIMARY KEY, 
//     content VARCHAR(100),
//     user_id INT , 
//     FOREIGN KEY (user_id) REFERENCES ussers(id)
//     );



//  ER diagram ,entity relationship diagram


// What are Keys?
// Keys are special columns in the table
// Primary Key
// It is a column (or set Of columns) in a table that uniquely identifies each row. (a unique id)
// There is only 1 PK & it should be NOT null.
// Foreign Key
// A foreign key is a column (or set Of columns) in a table that refers to the primary key ir
// FKs can have duplicate & null values.
// There can be multiple FKs.


// Table Queries
// Insert into Table
// INTO table_ name
// INSERT
// 0
// (colnamel, colname );
// ES
// (coll_vl, c012_ VI),
// (coll - v2, c012- v2);
// make sure the order is importent 

// INSERT INTO ussers 
// (id , age ,name ,email , followers , following )
// VALUES
// (0,45,"niteshdk12","hello12@gamil.com" , 34, 3433 );



// Select Command
// Selects & Show data from the DB
// Syntax
// SELECT
// coll, c012 FROM table_name;
// Syntax (to show all)
// SELECT
// * FROM table_name;


// SELECT id ,name , email ,age FROM ussers;

// SELECT * FROM ussers;

// SELECT DISTINCT age FROM ussers; from this you will get the uniques agees 