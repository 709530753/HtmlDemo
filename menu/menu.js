

var jsonData;

window.onload = function () {

    $.getJSON("menu.json",function (data) {

        jsonData = data;
        var left_html = ""

        $.each(data,function (i,item) {

            left_html += "<li class='left_item' onclick='getRightViewContent(" + i +")'>" + item.title +"</li>"
            getRightViewContent(0);
        })
        $(".left_view").html(left_html);

    });

};

function getRightViewContent(index) {

    console.log(index);

    var item = jsonData[index];
    var right_html = ""
    for (i = 0; i < item.list.length; i++) {
            right_html += "<li class='right_item'><img class='right_item_img'/><span class='right_item_title'>" + item.list[i].title +"</span></li>"

        }
        $(".right_view").html(right_html);

}