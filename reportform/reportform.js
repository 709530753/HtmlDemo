/**
 * Created by myxc on 2018/11/3.
 */


window.onload = function () {

    var data_arr = [0.07, 0.30, 0.25, 0.10, 0.20, 0.08];//比例，总数为1
    var color_arr = ["#00FF21", "#FFAA00", "#00AABB", "#FF4400", "#3F4400", "#543400"];//颜色
    drawCircle("canvas_circle", data_arr, color_arr);

    for(var i=0; i < 6; i ++) {

        var img = document.getElementsByClassName("img")[i];
        img.style.backgroundColor = color_arr[i];
    }

};

function drawCircle(canvasId, data_arr, color_arr){

    var c = document.getElementsByClassName(canvasId)[0];

    console.log("c : ",c);

    var ctx = c.getContext("2d");

    var radius = 75; //半径,圆距离边框20px

    console.log("heigh: " + c.height);

    var ox = 95, oy = 75; //圆心

    var startAngle = 0; //起始弧度

    var endAngle = 0;   //结束弧度


    for (var i = 0; i < data_arr.length; i++) {

        //绘制饼图

        endAngle = endAngle + data_arr[i] * Math.PI * 2; //结束弧度

        ctx.fillStyle = color_arr[i];

        ctx.beginPath();

        ctx.moveTo(ox, oy); //移动到到圆心

        ctx.arc(ox, oy, radius, startAngle, endAngle, false);

        ctx.closePath();

        ctx.fill();//填充颜色，只要边框 ctx.stroke();

        startAngle = endAngle; //设置起始弧度

    }

}