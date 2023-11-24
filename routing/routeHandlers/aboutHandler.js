/**
 * @param {string[]} pathSegments 
 * @param {import "http".IncomingMessage} request 
 * @param {import "http".ServerResponse} response 
 */
exports.handleAboutRoute = function(pathSegments, request, response){
   if(pathSegments.length > 0 || request.method !== "GET"){
      response.writeHead(404, { "Content-Type": "text/html" })
      response.write("404 Not Found")
      response.end()
      return
   }

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
         <h1>Hej about</h1>
      </body>
      </html`)
   response.end()
   return
}