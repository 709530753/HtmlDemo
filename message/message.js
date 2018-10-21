
//切换tab
function messageAction(index) {

    var motor_msg = document.getElementsByClassName("motor_msg")[0];
    var person_msg = document.getElementsByClassName("person_msg")[0];
    var popLine = document.getElementsByClassName("pop_line")[0];

    if (index == 0) {
        person_msg.style.color = "#000";
        motor_msg.style.color = "dodgerblue";
        popLine.style.float = "left";

    } else  {
        motor_msg.style.color = "#000";
        person_msg.style.color = "dodgerblue";
        popLine.style.float = "right";
    }
    updateContentData(index);
}

window.onload = function () {
   updateContentData(0)
};


function updateContentData(index) {
    // debugger;
    $.getJSON("message.json",function (data) {
        var msgData = index == 0 ? data.motorMsg : data.personMsg;
        var html = "";
        $.each(msgData,function (i, item) {
            html += "<li class='push_item'><img class='icon'/><div class='message_content' ><div class='message_content_top'><span class='title_name'>" + item.title_name +"</span><span class='push_time'>" + item.push_time +"</span></div><span class='content'>" + item.content +"</span></div><div class='bottom_line'></div></li>"
        });
        $('.list_view').html(html);
    });

}