const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://mikolaj:IyDSgrvmdHHubjG1@cluster0.rz3py9p.mongodb.net/?retryWrites=true&w=majority")
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
    console.log(post);
    res.status(201).json();
});

app.get("/api/posts",(req, res, next) => {
    const posts = [
        {id: "afesfdrg",
        title: "cos tam",
        content: "cos tam"
    },
    {id: "afesfefsfeg",
        title: "cos tam2",
        content: "cos tam2"
    },
    ];
    res.status(200).json({
        message: 'Posts',
        posts: posts
    });
});

module.exports = app;