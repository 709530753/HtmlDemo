

window.onload = function () {

    if (typeof(Storage) !== "undefined") {
        // 针对 localStorage/sessionStorage 的代码
        console.log("针对 localStorage/sessionStorage 的代码");
    } else {
        // 抱歉！不支持 Web Storage ..
        console.log("抱歉！不支持 Web Storage ..");
    }

    // 存储
    localStorage.setItem("lastname", "Gates");

    console.log("aaaaaaaaa: " + localStorage.getItem("lastname"));

}
