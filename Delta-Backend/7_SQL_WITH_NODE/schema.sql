CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY ,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);
