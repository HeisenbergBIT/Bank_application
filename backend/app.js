const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://mikolaj:IyDSgrvmdHHubjG1@cluster0.rz3py9p.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() =>{
    console.log("Connected to database")
})
.catch(() => {
    console.log("Connectin failed")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
     "Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.post("/api/posts",(req,res,next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    res.status(201).json();
});

app.get("/api/posts",(req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: 'Posts fetched',
            posts: documents
    })
    
    });
});

module.exports = app;