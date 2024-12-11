// Solution to handle port already in use and proper response handling
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please choose a different port.`);
      process.exit(1);
    } else {
      console.error(`An error occurred: ${err.message}`);
      process.exit(1);
    }
  });
};

startServer();
//Improved Response handling - added proper error handling and cleanup.
//In larger applications, consider using streams for large responses to reduce memory usage.