const {Router} = require("express");//解构赋值
const router = Router();//Router()运行函数

router.get("/01index",(req,res)=>{
    res.send(`
        <h1>我是主页</h1>
        <a href="/page/02details">跳转到详情页</a>
    `);
});

router.get("/02details",(req,res)=>{
    res.send(`
        <h1>我是详情页</h1>
        <a href="/page/01index">跳转到主页</a>
    `);
});
//导出定义的几个路由
module.exports = router;//router就是一个函数