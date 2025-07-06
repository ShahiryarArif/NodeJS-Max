const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if(url === "/") {
    res.write(`
    <html>
      <head><title>My First Page</title></head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message"/>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
    `);

    return res.end();
  } 

  if(url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Hello g")
    res.statusCode = 302;
    res.setHeader("Location", "/testing");
    // Or res.writeHead(302, { "Location": "/about" });
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>My First Page</title></head>
      <body><h1>Hello from my Node.js Server!</h1></body>
    </html>
    `);
  res.end();
});

server.listen(3000);