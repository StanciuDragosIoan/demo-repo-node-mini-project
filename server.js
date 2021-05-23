//import http module for our server
const http = require("http");
const logger = require("./custom_modules/logger");

const PORT = process.env.port || 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  //set content type Header
  res.setHeader("Content-Type", "text/html");

  switch (url) {
    case "/":
      res.write(`
      <h1>
        Welcome to the application entry point!
      </h1>
      `);
      res.end();
      break;
    case "/logger":
      if (method === "GET") {
        res.write(`
          <h1  
          >Welcome to our Logger Application</h1> 
          `);
        logger.renderLoggerForm(res);
        res.end();
      } else if (method === "POST") {
        logger.processForm(req, res);
      }
      break;
    default:
      res.end(`
    <h1>404 Page Not Found X_x</h1>
    `);
      break;
  }
});

//log some output to see everything's ok
console.log(`Server is running on port: 
            ${PORT} =)
            `);
logger.checkLogger();
//start the server
server.listen(PORT);
