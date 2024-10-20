
// Where Clause
// To define some conditions
// SELECT coil, c012 FROM table_name
// WHERE conditions;


// SELECT * 
// FROM ussers
// WHERE followers >200;


// SELECT name ,age 
// FROM ussers
// WHERE age > 20 ;


// Where Clause
// Operators
// Arithmetic Operators : +(addition) , -(subtraction). •(multiplication). /(division), "(modulus)
// Comparison Operators : • (equal to), (not equal to). > ,
// Logical Operators : AND, OR , NOT, IN, BETWEEN, ALL, LIKE, ANY
// Bitwise Operators : & (Bitwise AND), I (Bitwise OR)


// Where Clause
// Frequently used Operators
// AND (to check for both conditions to be true)
// OR (to check for one Of the conditions to be true)
// BETWEEN (selects for a given range)
// IN (matches any value in the list)
// NOT (to negate the given condition)

// SELECT name ,age,followers 
// FROM ussers
// WHERE age  BETWEEN 15 AND 30;


// SELECT name ,age,followers 
// FROM ussers
// WHERE email IN ('eve@example.com' ,'diana@example.com' ,'bob@example.com');



// SELECT name ,age,email 
// FROM ussers
// WHERE email NOT IN ('eve@example.com' ,'diana@example.com' ,'bob@example.com');


// Limit Clause
// Sets an upper limit on number of (tuples) rows to be returned
// SELECT coli, c012 FROM table_name
// LIMIT number;


// SELECT name ,age,email 
// FROM ussers
// WHERE email NOT IN ('eve@example.com' ,'diana@example.com' ,'bob@example.com')
// LIMIT 3;

// SELECT name ,age,email 
// FROM ussers
// LIMIT 3;



// Order by Clause
// To sort in ascending (ASC) or descending order (DESC)
// SELECT colt, c012 FROM table_name
// ORDER BY ASC;


// SELECT name ,age,email 
// FROM ussers
// ORDER BY name ASC;
//  by deafult showrting in ascending order

// SELECT name ,age,email 
// FROM ussers
// LIMIT 2
// ORDER BY name ASC;
// will give error 

// SELECT name ,age,email 
// FROM ussers
// ORDER BY name ASC;
// LIMIT 2
// no error 

// SELECT name ,age,email 
// FROM ussers
// ORDER BY name DESC;



// Aggregate Functions
// Aggregate functions perform a calculation on a set of values, and return a single value.
// • COUNT()
// . MAX()
// • MIN()
// • SUM()
// • AVGO
// Example :
// SELECT max(marks)
// FROM student;

// SELECT max(followers)
// FROM ussers;

// SELECT sum(age)
// FROM ussers;



// Group by Clause
// Groups rows that have the same values into summary rows.
// It collects data from multiple records and groups the result by one or more column.
// SELECT coil, c012
// FROM table_ name
// GROUP BY cot _ name(s);
// •Generally we use group by with some aggregation function.

// SELECT age , max(followers)
// FROM ussers
// GROUP BY age;



// SELECT age ,name , max(followers)
// FROM ussers
// GROUP BY age;
// it will not work beacuse jis basis par apane group banaya hai yusko hii select karr sakte hai  , aurr Aggregate function se sat agar kuch use karrre hai jese hii yaha hum followers ks use karre to yusases farak nahi padata hai 


// Having Clause
// Similar to Where i.e. applies some condition on rows.
// But it is used when we want to apply any condition after grouping.
// SELECT coli, c012
// FROM table-name
// GROUP BY col- name(s)
// HAVING condition;
// • WHERE is for the table, HAVING is for a group
// • Grouping is necessary for HAVING

// SELECT age , max(followers)
// FROM ussers
// GROUP BY age
// HAVING max(followers) > 300;



// General Order
// SELECT column(s)
// FROM table_name
// WHERE condition
// GROUP BY column(s)
// HAVING condition
// ORDER BY column(s) ASC;









