const http = require("http");
const port = 3000;
const rootHandler = require("./rootHandler");

  let url = new URL(request.url, "http://" + request.headers.host);

  let path = url.pathname;

  let pathSegments = path.split("/").filter(function (element) {
    return element !== "";
  });

  console.log(pathSegments);

  rootHandler.handleRoute(pathSegments, request, response);
}

let app = http.createServer(handleRequest);

const localIP = '10.156.32.188'; // Replace with your actual local IP address
app.listen(port, localIP);

console.log(`Server listening on http://${localIP}:${port}/`);
