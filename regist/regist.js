/**
 * Created by myxc on 2018/11/10.
 */


function registAction() {


    var username = document.getElementsByClassName("username")[0].value;
    var password = document.getElementsByClassName("password")[0].value;
    var re_password = document.getElementsByClassName("re_password")[0].value;

    if (username == null || username == "") {
        console.log("请输入用户名!");return;
    }

    if (password == null || password == "") {
        console.log("请输入密码!");return;
    }
    if (re_password == null || re_password == "") {
        console.log("请再次输入密码!");;return;
    }


    if(re_password != password) {
        console.log("两次密码输入不一致!");;return;
    }

    console.log("注册成功");


    //存储用户名 去登录

    if (typeof(Storage) !== "undefined") {
        // 针对 localStorage/sessionStorage 的代码
        console.log("针对 localStorage/sessionStorage 的代码");

        // 存储
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        console.log("username: " + localStorage.getItem("username"));

        window.location.href = "../login/login.html?username=" + username;
    } else {
        // 抱歉！不支持 Web Storage ..
        console.log("抱歉！不支持 Web Storage ..");
    }

}