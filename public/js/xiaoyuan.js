var country=document.querySelectorAll('.adv>span');
for(var p=0;p<country.length;p++){
  country[p].addEventListener('click',function(e){
    var input=document.querySelector('.input>.inp');
    input.value=e.target.innerHTML;
    document.querySelector('.adv').style.display='none'
  })
}
  // 获取当前时间
var dateTime=new Date();
var year=dateTime.getFullYear();
var month=dateTime.getMonth();
var date=dateTime.getDate();
var year1=document.querySelectorAll('.date-header1>span')[0];
year1.innerHTML=year;
var month1=document.querySelectorAll('.date-header1>span')[1];
month1.innerHTML=month;
var year2=document.querySelectorAll('.date-header2>span')[0];
year2.innerHTML=year;
var month2=document.querySelectorAll('.date-header2>span')[1];
if(month+1>=13){
  month2.innerHTML=1;
  year2.innerHTML=parseInt(year2.innerHTML)+1;
}else{
  month2.innerHTML=month+1;
}
// 判断是否为闰年
function isRunyear(year){
  if(year%400==0&&year%4!=0||year%4==0){
    return true;
  }else{
    return false;
  }
}
// 点击隐藏与显示div///////////////////////////////////////////
var count=document.querySelector('.inp');
count.onclick=function(e){
  document.querySelector('.adv').style.display='block';
  e.stopPropagation();//取消冒泡
}
var inp=document.querySelector('.date>input');
inp.onclick=function(){
  document.querySelector('.date>div').style.display='block';
  // e.stopPropagation();//取消冒泡
  
}
window.onclick=function(){
  document.querySelector('.adv').style.display='none';
  // document.querySelector('.date>div').style.display='none';

  
}
// ////////////////////////////////////////////////////
// 渲染日期
function show(year,month,date){
  // 查找第一个日历的元素并添加值
  document.querySelector('.date-header1>.year1').innerHTML = `${year}`;
  document.querySelector('.date-header1>.month1').innerHTML = `${month+1}`;
  // 查找第二个日历的元素并添加值
  if(month+1+1>=13){
    document.querySelector('.date-header2>.month2').innerHTML = 1;
    document.querySelector('.date-header2>.year2').innerHTML = `${year+1}`;
  }else{
    document.querySelector('.date-header2>.month2').innerHTML = `${month+1+1}`;
    document.querySelector('.date-header2>.year2').innerHTML = `${year}`;
  }
  // 创建一个月份数组
  var daysInMonth = [31, isRunyear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 确定当前月的第一天
  var firstDayInMonth = new Date(year, month, 1);
  if(month+1>=12){
    var firstDayInMonth1 = new Date(year+1, 0, 1);
  }else{
    var firstDayInMonth1 = new Date(year, month+1, 1);
  }
  // 确定当前月的第一天是星期几
  var firstDayWeek = firstDayInMonth.getDay()==0?7:firstDayInMonth.getDay();
  var firstDayWeek1 = firstDayInMonth1.getDay()==0?7:firstDayInMonth1.getDay();
  // 确定行数
  var row=Math.ceil((daysInMonth[month]-((firstDayWeek==0?(1):(8-firstDayWeek))))/7)+1;
  if(month+1>=12){
    var row1=Math.ceil((daysInMonth[0]-((firstDayWeek1==0?(1):(8-firstDayWeek1))))/7)+1;
  }else{
    var row1=Math.ceil((daysInMonth[month+1]-((firstDayWeek1==0?(1):(8-firstDayWeek1))))/7)+1;
  }
  // 创建一个数组，里面放html片段
  var rows=[];
  var rows1=[];
  // 遍历行
  for(var i=0;i<row;i++){
    rows[i]=`<div class="row">`
    for(var j=1;j<=7;j++){
      var idx = i*7 + j,
      date1 = idx-firstDayWeek+1;
      // 遍历列，去掉无用的日期
      if(date1<=0||date1>daysInMonth[month]){
        rows[i] += `<div class="day box"></div>`
      }else if(date1 === date){
        rows[i] += `<div class="day box today">${date1}</div>`
        t=i;
      }else{
        rows[i] += `<div class="day box">${date1}</div>`
      }
    }
    rows[i]+=`</div>`
  }
  for(var i=0;i<row1;i++){
    rows1[i]=`<div class="row">`
    for(var j=1;j<=7;j++){
      var idx = i*7 + j,
      date2 = idx-firstDayWeek1+1;
      if(date2<=0||date2>daysInMonth[(month+1)>=12?0:(month+1)]){
        rows1[i] += `<div class="day box"></div>`
      }else if(date2 === date){
        rows1[i] += `<div class="day box ">${date2}</div>`
        
      }else{
        rows1[i] += `<div class="day box">${date2}</div>`
      }
    }
    rows1[i]+=`</div>`
  }
  dateStr=rows.join('')
  // 将html片段添加进页面div中
  document.querySelector('.rows').innerHTML=dateStr;
  dateStr1=rows1.join('')
  document.querySelector('.rows1').innerHTML=dateStr1;
}
// 调用一次日期函数
show(year,month,date);
var leftMonth=document.querySelector('.leftMonth');
var rightMonth=document.querySelector('.rightMonth');
var leftYear=document.querySelector('.leftYear');
var rightYear=document.querySelector('.rightYear');
// 当发生点击事件时
// 上月
var temp=0;
var temp1=0;
leftMonth.addEventListener('click',function(){
  month--;
  temp--;
  if(month<0){
    year-=1;
    month=11;
  }
  show(year,month,date)
  select();
})
// 下月
rightMonth.addEventListener('click', function(){
  month++;
  temp++;
  if(month > 11){
      year += 1;
      month = 0;
  }
  if(temp1<=-1){
    if(temp==12){
      temp1+=1;
      temp=0;
    }
  }
  show(year,month,date);
  select();
})
// 去年
leftYear.addEventListener('click',function(){
  temp1--;
  year--;
  show(year,month,date)
  select();
})
// 明年
rightYear.addEventListener('click', function(){
  temp1++;
  year++;
  show(year,month,date);
  select();
})
// 事件委托，选择时间，并将时间渲染到input中,
function select(){
  var check0=document.querySelectorAll(`.today,.today~div,div.rows div.row:nth-child(${t+1})~div.row>div,.rows1>.row>div`);
  var check=document.querySelectorAll(`.today,.today~div,div.rows div.row:nth-child(${t+1})~div.row>div`);
  var check2=document.querySelectorAll(`div.rows div.row>div`);
  var check1=document.querySelectorAll(`.rows1>.row>div`);
  var arr=[];
  var arr1=[];
  if(temp==0&&temp1==0){
    for(var i=0;i<check.length;i++){
    if(check[i].innerHTML!=''){
      var x=0;
      check[i].addEventListener('click',function(e){
      var target=e.target
      arr.push(parseInt(target.innerHTML));
      if(arr.length>=2&&parseInt(arr[0])<parseInt(arr[1])){
        inp.value=`${month+1}月${arr[0]}日-${month+1}月${arr[1]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
      }else if(arr.length==1&&arr1.length==1){
        inp.value=`${month+1}月${arr[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
        arr1=[]
      }else if(arr.length>=2&&parseInt(arr[0])>parseInt(arr[1])){
        inp.value=`${month+1}月${arr[1]}日-${month+1}月${arr[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
      }
      target.style.background='#00bcd4'
      x++;
      if(x+y>=3){
        x=0;
        y=0;arr=[];
        for(var j=0;j<check0.length;j++){
          check0[j].style.background=''
        }
      }
    })}
  }
  for(var i=0;i<check1.length;i++){
    if(check1[i].innerHTML!=''){
      var y=0;
      check1[i].addEventListener('click',function(e){
      var target=e.target
      arr1.push(parseInt(target.innerHTML));
      if(arr1.length>=2&&parseInt(arr1[0])<parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[1]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }else if(arr.length==1&&arr1.length==1){
        inp.value=`${month+1}月${arr[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
        arr1=[]
      }else if(arr1.length>=2&&parseInt(arr1[0])>parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[1]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }
      target.style.background='#00bcd4'
      y++;
      if(x+y>=3){
        x=0;
        y=0;
        arr1=[];
        for(var j=0;j<check0.length;j++){
          check0[j].style.background=''
        }
      }
      })
    }
  }
  }
  else if(temp==-1){
    for(var i=0;i<check1.length;i++){
    if(check1[i].innerHTML!=''){
      var y=0;
      check1[i].addEventListener('click',function(e){
        var target=e.target
        if(parseInt(target.innerHTML)>=date){
          
      arr1.push(parseInt(target.innerHTML));
      if(arr1.length>=2&&parseInt(arr1[0])<parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[1]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }else if(arr1.length>=2&&parseInt(arr1[0])>parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[1]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }
      target.style.background='#00bcd4'
      y++;
      if(y>=3){
        x=0;
        y=0;
        arr1=[];
        for(var j=0;j<check0.length;j++){
          check0[j].style.background=''
        }
      }
        }
      })
    }
  }
}else if(temp<-1||temp1<=-1){}
  else{
    for(var i=0;i<check2.length;i++){
    if(check2[i].innerHTML!=''){
      var x=0;
      check2[i].addEventListener('click',function(e){
      var target=e.target
      arr.push(parseInt(target.innerHTML));
      if(arr.length>=2&&parseInt(arr[0])<parseInt(arr[1])){
        inp.value=`${month+1}月${arr[0]}日-${month+1}月${arr[1]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
      }else if(arr.length==1&&arr1.length==1){
        inp.value=`${month+1}月${arr[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
        arr1=[]
      }else if(arr.length>=2&&parseInt(arr[0])>parseInt(arr[1])){
        inp.value=`${month+1}月${arr[1]}日-${month+1}月${arr[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
      }
      target.style.background='#00bcd4'
      x++;
      if(x+y>=3){
        x=0;
        y=0;arr=[];
        for(var j=0;j<check0.length;j++){
          check0[j].style.background=''
        }
      }
    })}
  }
  for(var i=0;i<check1.length;i++){
    if(check1[i].innerHTML!=''){
      var y=0;
      check1[i].addEventListener('click',function(e){
      var target=e.target
      arr1.push(parseInt(target.innerHTML));
      if(arr1.length>=2&&parseInt(arr1[0])<parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[1]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }else if(arr.length==1&&arr1.length==1){
        inp.value=`${month+1}月${arr[0]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr=[];
        arr1=[]
      }else if(arr1.length>=2&&parseInt(arr1[0])>parseInt(arr1[1])){
        inp.value=`${month+1+1>=13?1:month+1+1}月${arr1[1]}日-${month+1+1>=13?1:month+1+1}月${arr1[0]}日`;
        document.querySelector('.date>div').style.display='none';
        arr1=[];
      }
      target.style.background='#00bcd4'
      y++;
      if(x+y>=3){
        x=0;
        y=0;
        arr1=[];
        for(var j=0;j<check0.length;j++){
          check0[j].style.background=''
        }
      }
      })
    }
  }
  }
}
select();