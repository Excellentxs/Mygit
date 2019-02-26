var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/details",(req,res)=>{
  res.render("details",{
    // render 返回页面内容（渲染变量到模板中），并且没有发送第二次请求
    // redirect 发送了第二次请求，是个跳转函数，而且会返回302的状态码
    content:"这是一段信息"
  })
});
module.exports = router;
