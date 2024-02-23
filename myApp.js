let express = require("express");
let app = express();
require('dotenv').config()

console.log("Hello World");

// app.get("/", function(req, res) {
//     // res.send('Oki, doki, me getting it');
//     absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath)

//     app.use("/public", express.static(__dirname + "/public"))

//     res.json("your-app-url/json", {"message": "Hello json"})
//   })



app.get("/json", function (req, res){
  if(process.env.MESSAGE_STYLE === "uppercase"){

  
    res.json({"message": "HELLO JSON"})}
    
  else {res.json({"message": "Hello json"});}



    

})

  


module.exports = app;
