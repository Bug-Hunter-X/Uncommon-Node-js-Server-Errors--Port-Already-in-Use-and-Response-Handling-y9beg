const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon error:  If a port is already in use, the server.listen method will throw an 'ERR_SERVER_ALREADY_IN_USE' error.  This is often overlooked.
//Another less common issue is when the response object isn't properly handled, leading to memory leaks or unexpected behavior.