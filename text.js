window.onload = function () {
    var params = getparms() //获取url参数
    // var _ijt = decodeURIComponent(params["_ijt"])
    // alert(_ijt)

    reqDataAjax()
}

// 接口调用方法
function reqDataAjax() {
    $.ajax({
        type:"get",
        url:"http://localhost:9527/serverstation/queryMaintenanceItem",
        success:function(result){
            console.log("result :" + result);
            var obj = eval('(' + result + ')');
            console.log("obj :",obj);
            var list = obj.data.list;
            var strHtml = "";
            strHtml += "<li onclick='clickItem()'><span>itemId&nbsp;&nbsp;&nbsp;</span><span>opId&nbsp;&nbsp;&nbsp;</span><span>repairItemName&nbsp;&nbsp;&nbsp;</span><img src='img/next.png' class='arrow_right'/></li><div class='bottom-line'></div>"
            for (var i=0;i<list.length;i++){
                var repairItemName = list[i].repairItemName
                var opId = list[i].opId
                var itemId = list[i].itemId
                console.log("list");
                console.log(JSON.stringify(list[i]))

                strHtml += "<li onclick='clickItem(" + JSON.stringify(list[i]) + ")'><span>" + itemId + "&nbsp;&nbsp;&nbsp;" + "</span><span>" + opId + "&nbsp;&nbsp;&nbsp;" + "</span><span>" + repairItemName + "&nbsp;&nbsp;&nbsp;" + "</span><img src='img/next.png' class='arrow_right'/></li><div class='bottom-line'></div>"
                }
            $('.table-list').html(strHtml);

        },error:function(data){
            console.log(data);
            console.log("error");
            alert("aaa" + data)
        }
    });
}

function clickItem(item) {
    var repairItemName = item.repairItemName
    var opId = item.opId
    var itemId = item.itemId

    console.log("repairItemName : " + repairItemName);
    console.log("opId : " + opId);
    console.log("itemId : " + itemId);

    //是否运行在app环境
    if(typeof window.webkit != "undefined"
        && typeof window.webkit.messageHandlers != "undefined"
        && typeof window.webkit.messageHandlers.name != "undefined"){
        console.log("result : app" );
        alert("runapp");
        // window.webkit.messageHandlers.name.postMessage({"action":"openNewWindow","params":{"url":"http://localhost:63342/Demo/Text.html?_ijt=jo1ctphh77amjihipo29evpp0f","title":"web"},"callBack":"callBack"});
        window.webkit.messageHandlers.name.postMessage({"action":"payAction","params":{"url":"http://localhost:63342/Demo/Text.html?_ijt=jo1ctphh77amjihipo29evpp0f","title":"web"},"callBack":"callBack"});
    } else  {
        console.log("result : runchrome" );
        window.location.href = 'http://www.baidu.com';
        window.location.href = 'NextPage.html';
    }
}

function payResult() {
    alert("pay");
    reqDataAjax();
    // window.webkit.messageHandlers.name.postMessage({"action":"openNewWindow","params":{"url":"http://localhost:63343/Demo/Text.html?_ijt=4kbf334njc6tbsau1bt05vou07","title":"web"},"callBack":"callBack"});
}