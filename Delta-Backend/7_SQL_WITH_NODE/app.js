import mysql from 'mysql2';
import {faker} from '@faker-js/faker';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'test' 
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});



function runsql(sqlcommand){
connection.query(sqlcommand, (error, results, fields) => {
    if (error) throw error;
    console.log('Data: ', results);
    connection.end();
})
}


// runsql("SELECT *  FROM users")

// ? place holderrs 

let query = 'INSERT INTO users (id, username,password , email) VALUES (?, ?,? ,? )';
let arr = [20, 'john', 'johndoe', 'johndoe123'];

function createRandomUser() {
    return [
       faker.string.uuid(),
       faker.internet.username(), 
       faker.internet.email(),
       faker.image.avatar(),
       faker.internet.password(),
    ];
  }


  function insertRandomUser(query,arr) {
    connection.query(query, arr, (error, results, fields) => {
        if (error) throw error;
        console.log('Data: ', results);
        connection.end();
    })  
  }

  runsql("SELECT *  FROM users")
  insertRandomUser(query, createRandomUser())
console.log(createRandomUser());
