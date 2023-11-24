let aboutHandler = require("./routeHandlers/aboutHandler")
let menuHandler = require("./routeHandlers/menuHandler")

/**
 * 
 * @param {string[]} pathSegments 
 * @param {import "http".IncomingMessage} request 
 * @param {import "http".ServerResponse} response 
 * @returns 
 */
exports.handleRoute = function(pathSegments, request, response){
   if (pathSegments.length === 0){
      response.writeHead(200, { "Content-Type": "text/html" })
      response.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
      </head>
      <body>
         <h1>Hej</h1>
      </body>
      </html`)
      response.end()
      return
   }

   let seg = pathSegments.shift()
   switch(seg){
      case "about":
         aboutHandler.handleAboutRoute(pathSegments, request, response)
         break
      case "menu":
         menuHandler.handleMenuRoute(pathSegments, request, response)
         break
      default:
         response.writeHead(404, { "Content-Type": "text/html" })
         response.write("404 Not Found")
         response.end()
         break
   }
}