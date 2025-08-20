const http = require('http');
const data = require('./data.json');
const arg = process.argv;
console.log(arg);
const port = arg[2] || 8000;

// http.createServer((req, res) => {
//   console.log(req.url);

//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(port);
// console.log(`Server is running on port ${port}`);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log(req.url);
  if (req.url === "/") {
    res.write(`<form action="/submit" method="POST">
                <input type="text" name="name" placeholder="Enter your name" />
                <button type="submit">Submit</button>
              </form>`);
  } else if (req.url.startsWith("/submit")) {
    res.write("data submitted");
  }

  res.end();
}).listen(port);
console.log(`Server is running on port ${port}`);




