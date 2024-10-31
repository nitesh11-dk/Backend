## **Express.js Middleware Example Code Notes**

### **1. Basic Setup**
- **Import Modules**: 
  ```javascript
  import express from "express";
  import { log } from "console";
  ```
- **Initialize the App**: 
  ```javascript
  const app = express();
  ```

### **2. Middleware Basics**
- Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle.
- Middleware can perform tasks such as logging, authentication, parsing, or adding extra properties to requests.
- After performing the intended operation, you call `next()` to pass control to the next middleware in the stack.

### **3. Example of a Basic Middleware** 
- Logs a message every time a request is received.
- `next()` signals that the middleware has completed its task.
```javascript
app.use((req, res, next) => {
    console.log("Logging...");
    return next(); // Executes the next middleware in the stack.
});
```

> **Note**: Anything written after `next()` will not execute, so it’s a good practice to consider it as the endpoint for that middleware.

### **4. Chaining Middlewares**
- Middleware runs for every request, regardless of routes or errors, as shown below:
```javascript
app.use((req, res, next) => {
    console.log("Logging2323...");
    next();
});
```

### **5. Middleware for Specific Routes**
- You can assign middleware to specific routes. This middleware will only run when a request matches the specified path (`/users` in this case).
```javascript
app.use("/users", (req, res, next) => {
    console.log("Users middleware");
    next();
});
```

### **6. Middleware as Functions**
- Middleware can also be written as separate functions to be reused easily.
- Example `logger` middleware:
```javascript
let logger = (req, res, next) => {
    req.time = Date.now().toString();
    console.log(req.method, req.path, req.hostname, req.time);
    next();
};
```

- This middleware is then used in the route handler:
```javascript
app.get("/", logger, (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});
```

> **Key Point**: Middlewares should always be defined at the top of the file for better visibility and maintainability.

### **7. Error-Handling Middleware**
- This middleware handles errors or unmatched routes.
- If none of the defined routes match, it responds with a "page not found" message:
```javascript
app.use((req, res) => {
    res.send("page not found");
});
```

### **8. Starting the Server**
- Defines a port and listens for incoming requests:
```javascript
app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
```

---

## **Summary of Key Concepts:**

1. **Middleware**: Functions that execute during the lifecycle of a request to the server. They perform tasks like logging, authentication, parsing, etc. Always use `next()` to proceed to the next middleware or route handler.
2. **Global Middleware**: Runs on every request regardless of the path.
3. **Route-Specific Middleware**: Runs only on specific routes like `/users`.
4. **Error-Handling Middleware**: Catches unmatched routes or errors.
5. **Middleware as a Separate Function**: Makes it reusable and cleaner to add to route handlers.
6. **Order of Middleware**: Define middleware functions before defining routes for better readability and consistency.
