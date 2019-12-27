var details=document.querySelectorAll('dd');
  function show1(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){             
        var result=xhr.responseText;
        var res=JSON.parse(result);
        for(var i=0;i<details.length;i++){
          details[i].innerHTML=res[i].ref;
        }
      }
    }
    xhr.open('get','/user/details',true);
    xhr.send()
  }
  show1()
  for(var j=0;j<details.length;j++){
    details[j].onclick=function(){
      window.location.href='http://127.0.0.1:8080/pingjia.html'
    }
  }