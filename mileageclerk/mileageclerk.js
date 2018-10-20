
window.onload = function () {

    $.getJSON ("mileageclerk.json", function (data) {
        var listHtml = "";
        $.each (data, function (i, item) {
            listHtml += "<li><span class='title'>" + item.title +"</span><div class='var_div'><span class='main_name'>" + item.main_name +"</span><span class='sub_name'>" + item.sub_name + "</span></div><div class='var_div'><span class='mail'>" + item.mile +"</span><span class='speed'>" + item.speed + "</span></div><div class='bottom_line'></div></li>"
            $('.list_view').html(listHtml);

        });
    });

};


function readTextFile(file, callback) {
       var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {

            console.log(rawFile.readyState);

            console.log(rawFile.status);

               if (rawFile.readyState === 4 && rawFile.status == "200") {
                       callback(rawFile.responseText);
                    }
          }
       rawFile.send(null);
};