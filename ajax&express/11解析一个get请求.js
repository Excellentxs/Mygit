const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");


app.get("/index",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"./11.html"))
});

app.get("/something",(req,res,next)=>{
    console.log(req.url);
    //不支持直接解析post请求
    console.log(req.query.stature);
    res.json({
        data:"返还信息"
    });
});

app.post("/getPost",(req,res,next)=>{
    var str = "";
    //post解析
    req.on("data",function (chunk) {
        str += chunk;
    });
    req.on("end",function () {
        console.log(str);
        console.log(query.parse(str));
        res.json({
            data:"接收到post"
        })
    })
});

app.listen(3000);