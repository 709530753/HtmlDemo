
var all_data;
var selected_item;
var selected_image;
var selected_title;

window.onload = function () {

    $.getJSON("main.json",function (data) {
        all_data = data;
        var bottom_html = ""

        $.each(data,function (i,item) {

            console.log("itemIndex :" + i + " item :" + item.title);

            bottom_html += "<li class=" + item.class + " + onclick='tabBarItemSelected(" + i + ")'><img id='" + 'image_' + i + "' src=" + item.icon + "/><span id='" + "title_" + i +"'>" + item.title + "</span></li>"

        })
        $(".bottom_view").html(bottom_html);
        tabBarItemSelected(0);


    });

}

function tabBarItemSelected(index) {

    console.log("indedx : " + index);

    if (selected_item != null) {
        selected_image.src = selected_item.icon;
        selected_title.style.color = selected_item.color;
        console.log("selected_item_old : " + selected_item.selected_icon);
    }


    selected_item = all_data[index];

    console.log("selected_item_new : " + selected_item.selected_icon);

    selected_image = document.getElementById("image_" + index);
    selected_title = document.getElementById("title_" + index);
    selected_image.src = selected_item.selected_icon;
    selected_title.style.color = selected_item.selected_color;

    //切换content

    console.log("selected_item.content : " + selected_item.content);

    var content_html = "<object type='text/html' data='" + selected_item.content + "'width='100%' height='100%'></object>";

    $(".content").html(content_html);


}