const express = require('express')
const app = express()
const port = 8081
var msg;
var app_msg = process.env.APP_MSG;
var name= process.env.USER_NAME;
var user_password= process.env.USER_PASSWORD;

app.get('/', (req, res) => {
    if (app_msg == undefined) {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nYou have no message for me. v3.\n';
    } else {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nI will deliver your message: ' + app_msg + '\n';
    }
    if (name != undefined && user_password != undefined){
        msg = msg + '\nYour user name is :- ' + name + ' and password is :- ' + user_password + '\n';
    }
    res.send(msg);
})

app.listen(port, () => console.log(`Sample node app listening at port ${port}`))

// Sample code for SonarQube
let corsOptions = {
  origin: '*' // Sensitive
};

function foo() {
  console.log("Hello, World!!!");
}

var x = ["Saab", "Volvo", "BMW"];
x.reverse(); // Noncompliant
y.sort(); // Noncompliant

var m = 8;
var n = "8";

if (m == n) {  // Noncompliant; always false
  // ...
}
