const greenMenuHandler = require("./greenMenuHandler")
/**
 * @param {string[]} pathSegments 
 * @param {import "http".IncomingMessage} request 
 * @param {import "http".ServerResponse} response 
 */
exports.handleMenuRoute = function(pathSegments, request, response){
   if (pathSegments.length === 0 || request.method !== "GET"){
      response.writeHead(404, { "Content-Type": "text/html" })
      response.write("404 Not Found")
      response.end()
      return
   }

   let seg = pathSegments.shift()
   
   switch (seg){
      case "green":    
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Green menu</h1>")
         response.end()
         break
      case "meat":
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Meat menu</h1>")
         response.end()
         break
      case "chicken":
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Chicken menu (chicken is not meat)</h1>")
         response.end()
         break
      default:
         response.writeHead(404, { "Content-Type": "text/html" })
         response.write("404 Not Found")
         response.end()
         break
   }
}