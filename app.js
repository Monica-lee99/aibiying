//导入express包
const express=require('express');
//导入路由模块
const userRouter=require('./routers/user')
//中间件
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//添加静态文件
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(express.static('public'));
//添加前缀
app.use('/user',userRouter);