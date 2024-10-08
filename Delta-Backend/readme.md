
# Node.js

## Overview
- **Node.js** is a **JavaScript runtime environment**.
- It is used for **server-side programming**.
- Node.js is **not** a language, library, or framework.

## Process Object
- The **Process** object provides information and control over the current Node.js process.
  
### process.argv
- `process.argv`: Returns an array containing the command-line arguments passed when the Node.js process was launched.

#### Example:
```javascript
console.log(process.argv);

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}
```

## require and module.exports
- If `module.exports` is not used in a file but that file is **required**, an empty object is returned.

### Example:
```javascript
const someval = require('./Nodejs/math');
console.log(someval);
// let res = someval.sum(200, 3000);
// console.log(res);
```

- Best practice: Break down your code into smaller files, use `module.exports` to export them, and then import all files in `index.js`. The folder name can be used as the module name for requiring.

## NPM (Node Package Manager)
- **NPM**: It's a package manager for Node.js, just like the Play Store is for Android.
- It hosts a large library of Node.js packages.

### Installing Packages
- **node_modules**: This folder contains all installed dependencies for your project.
- **package-lock.json**: It records the exact version of every installed dependency, including sub-dependencies and their versions.

### package.json
- The `package.json` file contains descriptive and functional metadata about a project, such as its name, version, and dependencies.

### Local vs Global Installation
- **Local Installation**: Installs a package locally for the project.
- **Global Installation**: 
    - `npm install -g <package-name>`: Installs a package globally.
    - `npm link <package-name>`: Links a global package.

## require vs import
- **require**: 
  - Loads the entire module.
  - Loading is **synchronous**.
- **import**:
  - Can selectively load only the pieces we need, saving memory.
  - Loading can be **asynchronous**.

### Example of import:
```javascript
import { sum } from "./math.js";
```

---


# Express.js

## Library vs Framework

### Library
- A **library** is a collection of pre-written code that helps perform specific tasks. It gives developers more control over how the code is used.
- Example: `axios`.

### Framework
- A **framework** is a set of pre-written code that provides a structure for developing software applications. The framework itself holds more control over how your application is structured and functions.
- Example: `express`.

## What is Express?
- **Express** is a **Node.js web application framework** that simplifies creating web applications.
- It is used for **server-side programming**.
- Key functionalities:
  1. Listens for incoming requests.
  2. Parses the request.
  3. Matches responses with routes.
  4. Provides suitable responses for requests.

### Ports
- **Ports** are the logical endpoints of a network connection that exchange information between a web server and a web client.

- If the server is not running or listening, you may see: 
  - `Hmm… can't reach this page, localhost refused to connect.`
- If the server is running but no route is defined, you get:
  - `Cannot GET /`.

## Express Setup

### Using `require`
```javascript
const express = require('express');
const app = express();
```

### Using `import`
```javascript
import express from 'express';
const app = express();
```

## Example Routes

### Basic Route with `GET`
```javascript
app.get('/', (req, res) => {
    res.send("Hello Express");
});
```

### Using `app.use`
- `app.use()` is used for handling **any type of request**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
```javascript
app.use("/", (req, res) => {
    res.send("Hello Express kese ho universally");
});
```

### Starting the Server
```javascript
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
```

## Routes
- **Routing** is the process of selecting a path for traffic in a network or across multiple networks.

### Example Route
```javascript
app.get('/', (req, res) => {
    res.send("Hello, kese ho!");
    res.send("<h1>Hello Express</h1>");
});
```

### Path Parameters
- You can capture dynamic values in the URL using **path parameters**.
```javascript
app.get("/:username", (req, res) => {
    let { username } = req.params;
    res.send(username);
});
```

### Query Strings
- You can capture **query string** values passed in the URL.
```javascript
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});
```
- Example URL: `http://localhost:3000/search?username=apple&color=green`

### Default Route
- If no other route matches, this default route handles the request.
- Note that yisko last me likha hai sare routes ke bad qkii pahale rakha to vo path apane code me rakhne ke bad vhi vo does not exist batayega 
```javascript
app.get("*", (req, res) => {
    res.send("The path does not exist");
});
```
