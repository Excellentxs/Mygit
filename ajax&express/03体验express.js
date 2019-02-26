const express = require("express");
const app = express();
const path = require("path");
//快速生成服务器
// "/"主页面
app.get("/",(req,res,next)=>{
    console.log(req.url);//req 记载客户端请求的信息
    // res.send("hello express");
    //sendFile需要传入绝对路径
    res.sendFile(path.resolve(__dirname,"./04发送一个post.html"));
});

app.post("/",(req,res,next) =>{
   res.send("收到post请求");
});

app.listen(3000);