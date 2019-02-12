const fs = require("fs");
const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  fs.writeFileSync("hello-world.txt", "Hello to this great world", "utf8");
  response.end(
    `Handling a request on port ${port} and I made that file for you.`
  );
};

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }
  console.log(`server is listening on ${port}`);
});

// fs.writeFile("hello-world.txt", "Hello to this great world", "utf8", err => {
//   if (err) throw err;
//
//   console.log("I made that file for you.");
// });
