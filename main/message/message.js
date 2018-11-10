

var list_view_html =  "";
var current_index;
//切换tab
function messageAction(index) {
    list_view_html = "";
    current_index = index
    var motor_msg = document.getElementsByClassName("motor_msg")[0];
    var person_msg = document.getElementsByClassName("person_msg")[0];
    var popLine = document.getElementsByClassName("pop_line")[0];

    if (current_index == 0) {
        person_msg.style.color = "#000";
        motor_msg.style.color = "#d4237a";
        popLine.style.float = "left";

    } else  {
        motor_msg.style.color = "#000";
        person_msg.style.color = "#d4237a";
        popLine.style.float = "right";
    }
    updateContentData(current_index);
}

window.onload = function () {
    current_index = 0;
    updateContentData(current_index)
};


function updateContentData(index) {
    // debugger;
    $.getJSON("message.json",function (data) {
        var msgData = index == 0 ? data.motorMsg : data.personMsg;
        var html = "";
        $.each(msgData,function (i, item) {

            html += "<li class='push_item' onclick='itemClick(" + JSON.stringify(item) + ")'><img class='icon'/><div class='message_content' ><div class='message_content_top'><span class='title_name'>" + item.title_name +"</span><span class='push_time'>" + item.push_time +"</span></div><span class='content'>" + item.content +"</span></div><div class='bottom_line'></div></li>"
        });
        list_view_html += html
        var totol_html = "";
        totol_html = list_view_html;

        totol_html += "<div class='load_more' onclick='loadMore()'>上拉加载更多</div>";
        $('.list_view').html(totol_html);
    });

}

function itemClick(item) {

    // console.log("load: " + item.content);
    // window.location.href = "../menu/menu.html";

}

function loadMore() {

    updateContentData(current_index);

}