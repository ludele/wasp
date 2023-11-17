let express = require("express");
let app = express();
let port = 25565;


/*app.get("/", function(request, response){
   response.send("Hej");
});

app.get("/hello/", function(request, response){
   response.send("hi again");
})

app.use(express.static("static"));
*/

app.listen(port, function(){
   console.log("Server listening on port " + port);
});


