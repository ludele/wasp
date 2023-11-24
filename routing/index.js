const http = require("http")
const port = 3000
const rootHandler = require("./rootHandler")

async function handleRequest(request, response){
   let url = new URL(request.url, "http://" + request.headers.host)
   let path = url.pathname
   let pathSegments = path.split("/").filter(function(element){
      return element !== ""
   })
   console.log(pathSegments)
   rootHandler.handleRoute(pathSegments, request, response)
}

let app = http.createServer(handleRequest)

app.listen(port)
console.log(`Server listening on port ${port}`)
