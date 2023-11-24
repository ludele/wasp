let express = require("express")
let app = express()
let port = 3000

app.set("view engine", "hbs")

app.use(express.static('static'))
app.use(express.urlencoded())

app.get("/", function(req, res){
   res.render("index", {
      name: "Leo",
      age: "17",
      eyes: "black",
      ears: "ja"
   })
})

app.get("/form", function(req, res){
  res.render("form") 
})

app.post("/senddata", function(req, res){
   console.log(req.body)
   res.end();
})

app.listen(port, function(){
   console.log(`Server listening on port ${port}`)
})