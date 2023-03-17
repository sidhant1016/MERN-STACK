

const express = require('express');

const mongoose = require("mongoose");
require('./db/conn');
const app = express();
// const user = require('./models/userSchema')
app.use(express.json());

// we make routes file here
app.use(require('./router/auth'));




// middleware
const middleware = (req, res, next) => {
    console.log("hello, I am middleware");
    next();
};

app.get("/", function (req, res) {
    res.send("hello world app.js");
});

app.get("/ABOUT", middleware, function (req, res) {
    res.send("hello ABOUT PAGE");
});

app.get("/CONTACT", function (req, res) {
    res.send("hello contact page");
});

app.get("/api/signin", function (req, res) {
    res.send("hello signin page");
});

app.get("/api/signup", function (req, res) {
    res.send("hello signup page");
});
app.use((req, res, next) => {
    res.status(404).send('404 - Page not found');
});



app.listen(8080, function (req, res) {
    console.log("server is running on port 8080");
});
