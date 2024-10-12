# Module 5 
```markdown
# LEC- 56: to 70
```

1. **Introduction to HTTP Module in Node.js**

   - **Modules vs Packages**:
     - **Modules**: These are core features provided by Node.js, and we import them directly without downloading (e.g., `http`, `fs`).
     - **Packages**: These are external libraries downloaded via `npm` (Node Package Manager) and imported into the application.

   - **Running the App**:
     - If you face any issues with running your app using `nodemon`, you can use:
       ```bash
       npx nodemon app.js
       ```

2. **Creating a Server in Node.js**
   - Node.js allows us to create a simple server using the `http` module.
   - Example of a basic server:
     ```javascript
     import http from 'http';

     let server = http.createServer((req, res) => {
         res.end("Server is working");
     });

     server.listen(3000);
     ```
   - `res.end()`: Ends the response and sends it back to the client.

3. **Understanding `req.url`**
   - The `req.url` property provides the URL that the client requested.
   - Example:
     ```javascript
     let server = http.createServer((req, res) => {
         console.log(req.url); // Logs the requested URL
         res.end("Request URL logged");
     });
     ```
   - When you access a website, two primary URLs are accessed:
     - `/`: Root URL (main page).
     - `/favicon.ico`: Icon request for the website (e.g., the small icon you see in the browser tab).

4. **Routing in Node.js**
   - Routing allows you to serve different responses based on the URL requested by the user.
   - Example:
     ```javascript
     let server = http.createServer((req, res) => {
         if (req.url == '/') {
             res.end("You are on the root page");
         }
         if (req.url == '/read') {
             res.end("You are reading now");
         }
     });
     ```

5. **HTTP Methods**
   - HTTP defines several request methods to interact with a server, such as:
     - **GET**: To retrieve data from the server.
     - **POST**: To send data to the server.
     - **PUT**: To update data on the server.
     - **PATCH**: To partially update data on the server.
     - **DELETE**: To delete data from the server.

6. **HTTP Status Codes**
   - HTTP responses come with status codes to indicate the success or failure of a request. These codes are divided into categories:

### 1XX (Informational)
- **100 Continue**: Correct – The server has received the request headers and the client should proceed to send the request body.
- **101 Switching Protocols**: Correct – The server is switching protocols as requested by the client (e.g., from HTTP to WebSockets).

### 2XX (Success)
- **200 OK**: Correct – The request was successful, and the response body contains the result.
- **201 Created**: Correct – A new resource has been successfully created.
- **202 Accepted**: Correct – The request has been accepted for processing, but processing is not complete yet.
- **203 Non-Authoritative Information**: Correct – The server processed the request successfully, but some information may come from another source.

### 3XX (Redirection)
- **301 Moved Permanently**: Correct – The requested resource has been permanently moved to a new URL.
- **307 Temporary Redirect**: Correct – The resource is temporarily moved to a new URL, but future requests should continue using the original URL.
- **308 Permanent Redirect**: Correct – The resource has been permanently moved to a new URL, and future requests should use the new URL.

---
