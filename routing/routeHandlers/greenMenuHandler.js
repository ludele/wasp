/**
 * @param {string[]} pathSegments 
 * @param {import "http".IncomingMessage} request 
 * @param {import "http".ServerResponse} response 
 */
exports.handleSubMenuRoute = function(pathSegments, request, response){
   if (pathSegments.length === 0 || request.method !== "GET"){
      response.writeHead(404, { "Content-Type": "text/html" })
      response.write("404 Not Found")
      response.end()
      return
   }

   let seg = pathSegments.shift()
   
   switch (seg){
      case "lettuce":    
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Lettuces are green</h1>")
         response.end()
         break
      case "tomato":
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Tomatoes are red</h1>")
         response.end()
         break
      case "chicken":
         response.writeHead(200, {"Content-Type": "text/html" })
         response.write("<h1>Chicken (chicken is vegan)</h1>")
         response.end()
         break
      default:
         response.writeHead(404, { "Content-Type": "text/html" })
         response.write("404 Not Found")
         response.end()
         break
   }
}