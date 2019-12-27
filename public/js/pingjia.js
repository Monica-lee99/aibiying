let curTime = new Date(),
    curYear = curTime.getFullYear(),
    curMonth = curTime.getMonth(),
    curDate = curTime.getDate();
    curTime1 = new Date(),
    curYear1 = curTime1.getFullYear(),
    curMonth1 = curTime1.getMonth(),
    curDate1 = curTime1.getDate();

// 判断平年还是闰年
function isLeapYear(year){
    return (year%400 === 0) || ((year%4 === 0) && (year%100 !== 0))
}

function render(curYear, curMonth){
    document.querySelector('.year').innerHTML = `${curYear}年${curMonth + 1}月`;
    // 判断今年是平年还是闰年，并确定今年的每个月有多少天
    let daysInMonth = [31, isLeapYear(curYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 确定今天日期所在月的第一天是星期几
    let firstDayInMonth = new Date(curYear, curMonth, 1),
        firstDayWeek = firstDayInMonth.getDay()==0?7:firstDayInMonth.getDay();
    
    // 根据当前月的天数和当前月第一天星期几来确定当前月的行数
    let calendarRows = Math.ceil((daysInMonth[curMonth]-((firstDayWeek==0?(1):(8-firstDayWeek))))/7)+1;

    // 将每一行的日期放入到rows数组中
    let rows = [];

    // 外循环渲染日历的每一行
    for(let i = 0; i < calendarRows; i++){
        rows[i] = `<div class="day-row">`;
        // 内循环渲染日历的每一天
        for(let j = 1; j <= 7; j++){
            
            // 内外循环构成了一个calendarRows*7的表格，为当前月的每个表格设置idx索引；
            // 利用idx索引与当前月第一天星期几来确定当前月的日期
            let idx = i*7 + j,
                date = idx - firstDayWeek + 1;
            
            // 过滤掉无效日期、渲染有效日期
            if(date <= 0 || date > daysInMonth[curMonth]){
                rows[i] += `<div class="day box"></div>`
            }else if(date === curDate){
                rows[i] += `<div class="day box curday">${date}</div>`
            }else{
                rows[i] += `<div class="day box">${date}</div>`
            }
        }
        rows[i] += `</div>`
    }
    let dateStr = rows.join('');
    document.querySelector('.day-rows').innerHTML = dateStr;
}
function render1(curYear1, curMonth1){
    document.querySelector('.year1').innerHTML = `${curYear1}年${curMonth1 + 1}月`;
    // 判断今年是平年还是闰年，并确定今年的每个月有多少天
    let daysInMonth1 = [31, isLeapYear(curYear1) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 确定今天日期所在月的第一天是星期几
    let firstDayInMonth1 = new Date(curYear1, curMonth1, 1),
        firstDayWeek1 = firstDayInMonth1.getDay()==0?7:firstDayInMonth1.getDay();
    
    // 根据当前月的天数和当前月第一天星期几来确定当前月的行数
    let calendarRows1 = Math.ceil((daysInMonth1[curMonth1]-((firstDayWeek1==0?(1):(8-firstDayWeek1))))/7)+1;

    // 将每一行的日期放入到rows数组中
    let rows1 = [];
    
    // 外循环渲染日历的每一行
    for(let i = 0; i < calendarRows1; i++){
        rows1[i] = `<div class="day-row">`;
        // 内循环渲染日历的每一天
        for(let j = 1; j <= 7; j++){
            
            // 内外循环构成了一个calendarRows*7的表格，为当前月的每个表格设置idx索引；
            // 利用idx索引与当前月第一天星期几来确定当前月的日期
            let idx = i*7 + j,
                date1 = idx - firstDayWeek1 + 1;
            
            // 过滤掉无效日期、渲染有效日期
            if(date1 <= 0 || date1 > daysInMonth1[curMonth1]){
                rows1[i] += `<div class="day box"></div>`
            }else if(date1 === curDate1){
                rows1[i] += `<div class="day box curday">${date1}</div>`
            }else{
                rows1[i] += `<div class="day box">${date1}</div>`
            }
        }
        rows1[i] += `</div>`
    }
    let dateStr1 = rows1.join('');
    document.querySelector('.day-rows1').innerHTML = dateStr1;
}
// 首次调用render函数
render(curYear, curMonth);
render1(curYear1, curMonth1);

let leftBtn = document.querySelector('.left'),
    rightBtn = document.querySelector('.right');
    leftBtn1 = document.querySelector('.left1'),
    rightBtn1 = document.querySelector('.right1');
// 向左切换月份
leftBtn.addEventListener('click', function(){
    curMonth--;
    if(curMonth < 0){
        curYear -= 1;
        curMonth = 11;
    }
    render(curYear, curMonth);
    select()
})

// 向右切换月份
rightBtn.addEventListener('click', function(){
    curMonth++;
    if(curMonth > 11){
        curYear += 1;
        curMonth = 0;
    }
    render(curYear, curMonth);
    select()
})
leftBtn1.addEventListener('click', function(){
    curMonth1--;
    if(curMonth1 < 0){
        curYear1 -= 1;
        curMonth1 = 11;
    }
    render1(curYear1, curMonth1);
    select()
})

// 向右切换月份
rightBtn1.addEventListener('click', function(){
    curMonth1++;
    if(curMonth1 > 11){
        curYear1 += 1;  
        curMonth1 = 0;
    }
    render1(curYear1, curMonth1);
    select()
})
let selDate=document.querySelectorAll('.inp input');
let selDate1=document.querySelector('.date');
let selDate2=document.querySelector('.date1');
selDate[0].onclick=function(e){
    selDate1.style.display='block';
    selDate2.style.display='none';
    selPeople.style.display='none';
    e.stopPropagation();
}
selDate[1].onclick=function(e){  
    selDate2.style.display='block';
    selDate1.style.display='none';
    selPeople.style.display='none';    
    e.stopPropagation();
}
document.onclick=function(){
    selDate1.style.display='none';
    selDate2.style.display='none'; 
  }
function select(){
    let days=document.querySelector('.day-rows');
    let days1=document.querySelector('.day-rows1');
    let tempYear=parseInt((document.querySelector('.year').innerHTML).split('年')[0]);
    let tempMonth=parseInt((document.querySelector('.year').innerHTML).split('年')[1].split('月')[0]);
    let tempYear1=parseInt((document.querySelector('.year1').innerHTML).split('年')[0]);
    let tempMonth1=parseInt((document.querySelector('.year1').innerHTML).split('年')[1].split('月')[0]);
    if(tempYear==curYear&&tempMonth==curMonth+1){
        days.onclick=function(e){
            let target=e.target;
            if(target.innerHTML!=''){
                let change=document.querySelectorAll('.day-rows .day')
                for(var i=0;i<change.length;i++){
                    change[i].style.background=''
                }
                target.style.background='red';
                selDate[0].value=`${curYear}年${curMonth+1}月${target.innerHTML}日`;
                target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='';
            }
        }      
    }
    if(tempYear1==curYear1&&tempMonth1==curMonth1+1){
        days1.onclick=function(e){
            let target=e.target;
            if(target.innerHTML!=''){
                let change=document.querySelectorAll('.day-rows1 .day')
                for(var i=0;i<change.length;i++){
                    change[i].style.background=''
                }
                target.style.background='red';
                selDate[1].value=`${curYear1}年${curMonth1+1}月${target.innerHTML}日`;
                target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='';
            }
        }
    }
}
select()
let bot=document.querySelector('.bot');
let selPeople=document.querySelector('.sel-people');
bot.onclick=function(){
    selPeople.style.display='block';
}
let add=document.querySelectorAll('.add');
let sub=document.querySelectorAll('.sub');
let peopleCount=document.querySelectorAll('.sel-people>div>:nth-child(2)>:nth-child(2)');
let peoplesum=document.querySelector('.people-count');
let count=0;
for(var i=0;i<add.length;i++){
    add[i].onclick=function(){
    if(count>=3){
        alert('不能再多啦')
    }else{
        this.parentNode.previousElementSibling.innerHTML=parseInt(this.parentNode.previousElementSibling.innerHTML)+1;
        count++;
        for(var x=0,y=0;x<peopleCount.length;x++){
            y+=parseInt(peopleCount[x].innerHTML);
        }
        peoplesum.innerHTML=`${y}人`
    }  
    }
}
for(var j=0;j<sub.length;j++){
    sub[j].onclick=function(){
    if(parseInt(this.parentNode.nextElementSibling.innerHTML)>0){
        this.parentNode.nextElementSibling.innerHTML=parseInt(this.parentNode.nextElementSibling.innerHTML)-1;
        count--;
        for(var x=0,y=0;x<peopleCount.length;x++){
            y+=parseInt(peopleCount[x].innerHTML);
        }
        peoplesum.innerHTML=`${y}人`
    }else{
        alert('不能再少啦')
    }  
    }
}
let close=document.querySelector('.close');
close.onclick=function(){
    selPeople.style.display='none';
}

window.onscroll = function(){
    // 获取鼠标滚轮滚动距离
    let _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // this.console.log(_scrollTop);
    if(_scrollTop>=700){
        document.querySelector('.reserve').style.position='fixed';
        document.querySelector('.reserve').style.top='0';
        document.querySelector('.reserve').style.margin="0 0 0 700px";
    }else{
        document.querySelector('.reserve').style.position='absolute';
        document.querySelector('.reserve').style.margin='';
    }
}
