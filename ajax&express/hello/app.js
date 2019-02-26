var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();//生成express实例

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置视图窗口文件夹 地址path
app.set('view engine', 'ejs');//设置模板引擎 设置为ejs

app.use(logger('dev'));//打印中间件
app.use(express.json());//解析post请求的中间件
app.use(express.urlencoded({ extended: false }));//同上
app.use(cookieParser());//解析cookie
app.use(express.static(path.join(__dirname, 'public')));//静态资源的位置

app.use('/', indexRouter);//使用/为中间路由
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {  //使用404
  next(createError(404));
});

// error handler   错误处理中间件
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');//render()函数进行服务器端的渲染
});

module.exports = app;
