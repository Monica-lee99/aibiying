  //DOM4步:
//1. 查找触发事件的元素
var tabs=document.querySelectorAll(
  '[data-click=tab]'
);
//定义变量zIndex保存现在最大的zIndex值
var zIndex=0;
//2. 绑定事件处理函数
//遍历tabs中每个tab
for(var tab of tabs){
  //为每个tab绑定单击事件
  tab.onclick=function(){
    //3. 查找要修改的元素
    var id=this.getAttribute("data-id");
    //再用id查找对应的div
    var div=document.getElementById(id);
    //4. 修改元素
    //先将全局zIndex+1后，再赋值
    zIndex++;
    div.style.zIndex=zIndex;
  }
}
var support=document.querySelectorAll('.support');
for(var sup of support){
  sup.addEventListener('click',function(e){
    e.preventDefault();
    this.parentNode.innerHTML=`<img src="img/点赞.png" alt="" class="support">${parseInt(this.parentNode.innerHTML.split('>')[1])+1}`
  })
}
var login=document.querySelector('.login');
login.onclick=function(){
  window.location.href='http://127.0.0.1:8080/login.html'
}
var reg=document.querySelector('.reg');
reg.onclick=function(){
  window.location.href='http://127.0.0.1:8080/reg.html'
}