const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;

  console.log(firstname, lastname,email);
})

app.listen(3000, function(){
  console.log("server s running on port 3000");
});
// bd67de1888efccdec7d6c9d8e3f57385-us18
