const express = require("express");
const app = express();

// req 记载着用户的请求信息。
app.get("/index",function (req,res,next) {
    console.log("这是第一个函数");
    next();
},function () {
    console.log("这是第二个函数");
});

app.listen(3003);