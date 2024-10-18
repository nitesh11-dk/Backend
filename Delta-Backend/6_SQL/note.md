
---

# MySQL Database Notes

## Introduction
- **MySQL** is a popular relational database management system (RDBMS).
- **SQL (Structured Query Language)** is the language used to communicate with databases.

## SQL Commands
- SQL commands are **case-insensitive**, but it's best practice to use uppercase for commands and to end each statement with a semicolon (`;`).

---

## Creating and Managing Databases

### Creating a Database
```sql
CREATE DATABASE db_name;
-- Creates a new database with the specified name.

CREATE DATABASE IF NOT EXISTS db_name;
-- Creates a database only if it does not already exist.
```

### Dropping a Database
```sql
DROP DATABASE db_name;
-- Deletes the specified database.

DROP DATABASE IF EXISTS db_name;
-- Deletes the database only if it exists.
```

### Showing Databases
```sql
SHOW DATABASES;
-- Displays all databases on the MySQL server.
```

### Using a Database
```sql
USE db_name;
-- Selects the specified database for use.
```

---

## Working with Tables

### Creating a Table
```sql
CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint
);
```

### Example
```sql
CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18)
);
```

### Inserting Data into a Table
```sql
INSERT INTO student (id, name, age) VALUES (101, 'Adam', 12);
INSERT INTO student (id, name, age) VALUES (102, 'Bob', 14);
```

### Updating Data
```sql
UPDATE student SET age = 15 WHERE id = 101;
```

### Deleting Data
```sql
DELETE FROM student WHERE id = 102;
```

### Truncating a Table
```sql
TRUNCATE TABLE student;
-- Deletes all rows from the table without logging individual row deletions.
```

### Altering a Table
```sql
ALTER TABLE student ADD email VARCHAR(100);
-- Adds a new column 'email' to the 'student' table.
```

### Showing Tables
```sql
SHOW TABLES;
-- Displays all tables in the currently selected database.
```

---
## DATA TYPES


| **Data Type**     | **Description**                                   | **Unsigned**                      |
|-------------------|---------------------------------------------------|-----------------------------------|
| **TINYINT**       | Very small integer (1 byte)                       | TINYINT UNSIGNED (0 to 255)      |
| **SMALLINT**      | Small integer (2 bytes)                           | SMALLINT UNSIGNED (0 to 65,535)  |
| **MEDIUMINT**     | Medium-sized integer (3 bytes)                    | MEDIUMINT UNSIGNED (0 to 16,777,215) |
| **INT**           | Standard integer (4 bytes)                        | INT UNSIGNED (0 to 4,294,967,295) |
| **BIGINT**        | Large integer (8 bytes)                           | BIGINT UNSIGNED (0 to 18,446,744,073,709,551,615) |
| **FLOAT**         | Floating-point number (4 bytes)                   | FLOAT UNSIGNED (0 to 3.402823466E+38) |
| **DOUBLE**        | Double-precision floating-point number (8 bytes) | DOUBLE UNSIGNED (0 to 1.7976931348623157E+308) |
| **DECIMAL(M,D)**  | Fixed-point number (M = total digits, D = decimals) | DECIMAL(M,D) UNSIGNED |
| **CHAR(N)**       | Fixed-length string (N characters)                | CHAR(N) UNSIGNED (treated as a string) |
| **VARCHAR(N)**    | Variable-length string (up to N characters)      | VARCHAR(N) UNSIGNED (treated as a string) |
| **DATE**          | Date value (YYYY-MM-DD)                           | Not applicable                    |
| **DATETIME**      | Date and time (YYYY-MM-DD HH:MM:SS)              | Not applicable                    |
| **TIMESTAMP**     | Timestamp (YYYY-MM-DD HH:MM:SS)                  | Not applicable                    |
| **TIME**          | Time value (HH:MM:SS)                            | Not applicable                    |

### Notes:
- The **Unsigned** variant of an integer type only allows non-negative values, effectively doubling the maximum positive value it can hold compared to its signed counterpart.
- `CHAR` and `VARCHAR` types do not have unsigned variants, as they are used for string data, not numerical data.
- Floating-point and decimal types also have unsigned variants but are less commonly used compared to integer types.

### Example Data Types Usage
```sql
CREATE TABLE example (
    id INT,
    name VARCHAR(50),
    price FLOAT,
    created_at DATE
);
```

---

## Constraints
Constraints enforce rules on data in a table. Common constraints include:

- **NOT NULL**: Prevents `NULL` values in a column.
- **UNIQUE**: Ensures all values in a column are distinct.
- **DEFAULT**: Sets a default value for a column.
- **CHECK**: Validates that values meet a specified condition.

### Example of Constraints
```sql
CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    salary INT DEFAULT 50000,
    UNIQUE (name)
);
```

---
