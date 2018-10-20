
//获取url中参数
function getparms(){
    var str = window.location.href;
    var num = str.indexOf("?");
    str = str.substr(num + 1);
    var arr = str.split("&");
    var dictArr ={};

    var k;
    var v;
    for (var i = 0;i < arr.length;i++) {
        num=arr[i].indexOf("=");
        if(num<=0) continue;
        k = arr[i].substr(0,(num));
        v=arr[i].substr(num+1);
        dictArr[k]=v;
    }
    return dictArr;
}
