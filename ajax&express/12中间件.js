// post快速解析
// Express 应用就是在调用各种中间件
// 中间件是一个函数，它可以访问请求对象,响应对象和 web 应用中处于请求-响应循环流程中的中间件
// 所谓的中间件，就是指一个回调函数，在这个回调函数中，有三个参数，req, res, next。
const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");
const bodyParser = require("body-parser");

//下面的两行代码为解析post的中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
};
app.use(express.static('public', options));

app.get("/index",(req,res,next)=> {
    res.sendFile(path.resolve(__dirname,"./11.html"));
});
app.get("/something",(req,res,next)=>{
    console.log(req.url);
    console.log(req.query.status);

    res.json({
        data:"返回信息"
    })
});

//用来解析post请求 对数据进行加工 处理函数
// app.use((req,res,next)=>{
//     var str= "";
//     req.on("data",function (chunk) {
//         str+=chunk;
//     });
//     req.on("end",function () {
//         // console.log(req);
//         // console.log(query.parse(str).name);
//         req.body = query.parse(str);//把解析好的post请求放在end结束流中
//         next();
//
//     })
// });

app.post("/getPost", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000);