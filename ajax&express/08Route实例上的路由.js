// 路由是针对地址和请求方式做出解析的过程
// 在express中，有两种实现路由的方式：
// 1，针对应用级别的，就是在app对象上设置
// 2，针对Router实例对象的

const express = require("express");
const app = express();
const pageRoutes = require("./09路由实例上的路由");//引入路由
// const router = express.Router;//路由实例创造新的实例
console.log(pageRoutes);
//路由嵌套

//get 拿来获取一个资源
//post 提交一个需要在数据库增加的资源
//options 跨域请求的时候会出现
//patch 针对服务器上某个资源进行修改（替换性修改）一个完整的资源对象,如果提供不完整，缺了的那些字段应该被清空
//delete 删除数据库上的某个资源
//put 针对某个资源进行修改（部分修改）请求是一个局部更新

// use可以解析上面六种请求
// app.use();//()中包含路径和函数，如果只写函数就表示任意的请求use都处理

app.use("/page",pageRoutes);//提供页面  处理函数


app.listen(3002);