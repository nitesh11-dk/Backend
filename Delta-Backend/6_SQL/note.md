
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

Here are organized notes on SQL keys, table creation, and basic SQL commands, along with examples to illustrate each concept:

---

# SQL Keys and Tables

## 1. **Keys in SQL**

### **Primary Key (PK)**
- **Definition**: A primary key is a column (or set of columns) that uniquely identifies each row in a table.
- **Characteristics**:
  - There can be only one primary key per table.
  - A primary key must be `NOT NULL`.
  
**Example**:
```sql
CREATE TABLE temp (
    id INT NOT NULL,
    PRIMARY KEY (id)
);
```

### **Foreign Key (FK)**
- **Definition**: A foreign key is a column (or set of columns) that creates a link between two tables by referencing the primary key in another table.
- **Characteristics**:
  - A foreign key can have duplicate and `NULL` values.
  - There can be multiple foreign keys in a table.

**Example**:
```sql
CREATE TABLE customer (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE temp (
    cust_id INT,
    FOREIGN KEY (cust_id) REFERENCES customer(id)
);
```

## 2. **Creating Tables with Constraints**

### **Unique Constraints**
- Ensures that all values in a column are unique.
  
### **Check Constraints**
- Ensures that all values in a column satisfy a specific condition.

**Example**:
```sql
CREATE TABLE ussers (
    id INT UNIQUE,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 18),
    PRIMARY KEY (id)
);
```

## 3. **Table Queries**

### **Insert Command**
- **Purpose**: To insert data into a table.
- **Syntax**:
```sql
INSERT INTO table_name (col1, col2, ...) 
VALUES (val1, val2, ...);
```

**Example**:
```sql
INSERT INTO ussers (id, age, name, email, followers, following)
VALUES (0, 45, 'niteshdk12', 'hello12@gmail.com', 34, 3433);
```

### **Select Command**
- **Purpose**: To retrieve data from a table.
- **Syntax**:
```sql
SELECT column1, column2 FROM table_name;
```
- **To show all columns**:
```sql
SELECT * FROM table_name;
```
- **To retrieve distinct values**:
```sql
SELECT DISTINCT column_name FROM table_name;
```

**Examples**:
```sql
SELECT id, name, email, age FROM ussers;

SELECT * FROM ussers;

SELECT DISTINCT age FROM ussers;  -- This retrieves unique ages
```

## 4. **Entity-Relationship (ER) Diagram**
- An ER diagram visually represents the relationships between entities (tables) in a database.
- **Entities**: Tables such as `users`, `posts`, etc.
- **Relationships**: Links created via foreign keys.

## 5. **Example of Creating a Post Table with Foreign Key**
```sql
CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES ussers(id)
);
```

---


## **1. WHERE Clause**
The `WHERE` clause is used to filter records based on specific conditions.

**Syntax:**  
```sql
SELECT column1, column2  
FROM table_name  
WHERE condition;
```

**Examples:**  
```sql
SELECT name, age  
FROM users  
WHERE age > 20;

SELECT *  
FROM users  
WHERE followers > 200;
```

---

### **Operators in WHERE Clause**

#### **1. Arithmetic Operators**  
- `+` (Addition)  
- `-` (Subtraction)  
- `*` (Multiplication)  
- `/` (Division)  
- `%` (Modulus)

#### **2. Comparison Operators**  
- `=` (Equal to)  
- `!=` (Not equal to)  
- `>` (Greater than)  
- `<` (Less than)

#### **3. Logical Operators**  
- `AND`: Both conditions must be true.  
- `OR`: At least one condition must be true.  
- `NOT`: Negates the given condition.  
- `IN`: Matches any value from a list.  
- `BETWEEN`: Checks if a value falls within a given range.  
- `LIKE`: Pattern matching.

#### **4. Bitwise Operators**  
- `&` (Bitwise AND)  
- `|` (Bitwise OR)

**Examples with Frequently Used Operators:**  
```sql
SELECT name, age, followers  
FROM users  
WHERE age BETWEEN 15 AND 30;

SELECT name, age, followers  
FROM users  
WHERE email IN ('eve@example.com', 'diana@example.com', 'bob@example.com');

SELECT name, age, email  
FROM users  
WHERE email NOT IN ('eve@example.com', 'diana@example.com', 'bob@example.com');
```

---

## **2. LIMIT Clause**
The `LIMIT` clause restricts the number of rows returned by a query.

**Syntax:**  
```sql
SELECT column1, column2  
FROM table_name  
LIMIT number;
```

**Examples:**  
```sql
SELECT name, age, email  
FROM users  
LIMIT 3;

SELECT name, age, email  
FROM users  
WHERE email NOT IN ('eve@example.com', 'diana@example.com')  
LIMIT 3;
```

---

## **3. ORDER BY Clause**
The `ORDER BY` clause sorts the result in ascending (`ASC`) or descending (`DESC`) order.

**Syntax:**  
```sql
SELECT column1, column2  
FROM table_name  
ORDER BY column_name [ASC|DESC];
```

- **Default:** Sorting is ascending (`ASC`) if not specified.  

**Examples:**  
```sql
SELECT name, age, email  
FROM users  
ORDER BY name ASC;

SELECT name, age, email  
FROM users  
ORDER BY name DESC;
```

**Important Note:**  
- Use `ORDER BY` **before** `LIMIT`.  

**Example (Correct Usage):**  
```sql
SELECT name, age, email  
FROM users  
ORDER BY name ASC  
LIMIT 2;
```

---

## **4. Aggregate Functions**
Aggregate functions perform calculations on a set of values and return a single value.

- **COUNT()**: Counts the number of rows.  
- **MAX()**: Returns the maximum value.  
- **MIN()**: Returns the minimum value.  
- **SUM()**: Returns the sum of values.  
- **AVG()**: Returns the average value.

**Examples:**  
```sql
SELECT MAX(followers)  
FROM users;

SELECT SUM(age)  
FROM users;
```

---

## **5. GROUP BY Clause**
The `GROUP BY` clause groups rows that have the same value in specific columns. Often used with aggregate functions.

**Syntax:**  
```sql
SELECT column1, column2  
FROM table_name  
GROUP BY column1;
```

**Examples:**  
```sql
SELECT age, MAX(followers)  
FROM users  
GROUP BY age;
```

**Note:**  
- Only the column used in `GROUP BY` can appear directly in the `SELECT` statement.  

**Example (Invalid Usage):**  
```sql
SELECT age, name, MAX(followers)  
FROM users  
GROUP BY age;
```
**Explanation:**  
- This will cause an error because only `age` can appear in `SELECT`, not `name`, unless used within an aggregate function.

---

## **6. HAVING Clause**
The `HAVING` clause is used to apply conditions **after grouping** data with `GROUP BY`. It is similar to `WHERE`, but operates on groups rather than individual rows.

**Syntax:**  
```sql
SELECT column1, column2  
FROM table_name  
GROUP BY column1  
HAVING condition;
```

**Examples:**  
```sql
SELECT age, MAX(followers)  
FROM users  
GROUP BY age  
HAVING MAX(followers) > 300;
```

**Difference Between WHERE and HAVING:**  
- **`WHERE`** filters rows **before** grouping.  
- **`HAVING`** filters groups **after** grouping.

---

## **7. General Query Order in SQL**
The recommended order of clauses in SQL queries is:

1. `SELECT` – Columns to be retrieved.  
2. `FROM` – Table to query data from.  
3. `WHERE` – Filter rows.  
4. `GROUP BY` – Group rows by certain columns.  
5. `HAVING` – Filter groups.  
6. `ORDER BY` – Sort the result.  
7. `LIMIT` – Limit the number of rows.

**Example of Full Query with All Clauses:**  
```sql
SELECT age, MAX(followers)  
FROM users  
WHERE age > 20  
GROUP BY age  
HAVING MAX(followers) > 300  
ORDER BY age DESC  
LIMIT 2;
```

---

