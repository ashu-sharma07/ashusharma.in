const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

const domain = "127.0.0.1"
const port = 3000;
app.listen(port,domain,()=>{
    console.log(`Application running on ${domain}:${port}`)
});