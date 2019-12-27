//导入express包
const express=require('express');
//导入连接池模块
const pool=require('../pool.js');
//创建路由
var router=express.Router();
//注册用户
router.post('/reg',function(req,res){
    var obj=req.query;
    if(!obj.uname){
        res.send({code:401,msg:'用户名为空'});
        return;}
    if(!obj.upwd){
        res.send({code:402,msg:'密码为空'});
        return;
    }
    pool.query('INSERT INTO house_user SET ?',[obj], function(err,result){
        if(err) throw err;
        res.send({code:200,msg:'注册成功'})
    })
})
//登录用户
router.get('/login',function(req,res){
    var obj=req.query;
    pool.query('SELECT * FROM house_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:'登录成功'})
        }else{
            res.send({code:301,msg:'用户名或密码不正确'});
        }
    })
})
router.get('/details',function(req,res){
    var obj=req.query;
    pool.query('SELECT * FROM house_emp',function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send(result)
        }
    })
})
module.exports=router
