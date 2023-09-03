const express = require('express');

const app = express();

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
     "Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.use("/api/posts",(req, res, next) => {
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