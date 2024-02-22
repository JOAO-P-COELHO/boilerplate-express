let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res) {
    // res.send('Oki, doki, me getting it');
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)

    asd = __dirname + "/public"


    app.use("/public", express.static(asd))
  })




































 module.exports = app;
