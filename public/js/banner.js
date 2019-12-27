
var banner = document.querySelector('.banner')
var oLis = banner.querySelectorAll('.banner li')

var index = 0;
function moveTo(arr,num = 1){
    var len = arr.length;
    if(index + num >= len){
        index = 0;
    }else if(index + num < 0){
        index = len - 1;
    }else{
        index += num;
    }
    arr[index].style.opacity = 1;
    arr[index].style.zIndex = 1;
    for(let i = 0; i < len; i ++){
        if(i != index){
            arr[i].style.opacity = 0;
            arr[i].style.zIndex = 0;
        }
    }
//     if(index == 0){
//         oLis[oLis.length - 1].style.opacity = 0;
//         oLis[oLis.length - 1].style.zIndex = 0;
//     }else{
//         oLis[index - 1].style.opacity = 0;
//         oLis[index - 1].style.zIndex = 0;
//     }
//     index --;
//     if(index >= oLis.length){
//         index = 0;
//     }
}

setInterval(function(){
    moveTo(oLis)
}, 5000)

var controlLeft = banner.querySelector('.control-left')
var controlRight = banner.querySelector('.control-right')
controlLeft.onclick = function(){
    moveTo(oLis,-1)
}
controlRight.onclick = function(){
    moveTo(oLis)
}