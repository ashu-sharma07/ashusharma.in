const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/:anything", function(req, res){
    res.send("<h1>404 Page Don't Exist </h1><a href='/\'>Get Back to Home</a>")
});

const domain = "localhost"
const port = 3000;
app.listen(port,domain,()=>{
    console.log(`Application running on ${domain}:${port}`)
});