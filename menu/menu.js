

var jsonData;

var selectItem;

window.onload = function () {

    $.getJSON("menu.json",function (data) {

        jsonData = data;
        var left_html = ""

        $.each(data,function (i,item) {

            left_html += "<li class='left_item' id='"+ "left_item_" + i +"' onclick='getRightViewContent(" + i +")'>" + item.title +"</li>"
        })
        $(".left_view").html(left_html);
        getRightViewContent(0);

    });



};

function getRightViewContent(index) {


    if (selectItem != null) {
        selectItem.style.backgroundColor = '#efefef';
        selectItem.style.color = '#666';
    }

    console.log(index);

    var left_item = document.getElementById("left_item_" + index);

    selectItem = left_item;

    console.log("left_item : " + left_item);

    left_item.style.backgroundColor = '#fff';
    left_item.style.color = '#000';

    var item = jsonData[index];
    var right_html = ""
    for (i = 0; i < item.list.length; i++) {
            right_html += "<li class='right_item'><img class='right_item_img'/><span class='right_item_title'>" + item.list[i].title +"</span></li>"

        }
        $(".right_view").html(right_html);

}