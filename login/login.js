/**
 * Created by myxc on 2018/11/10.
 */

/*
*
* login
* */
function loginAction() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var localUsername = localStorage.getItem("username");
    var localPassword = localStorage.getItem("password");

    if (username == localUsername && password == localPassword) {
        console.log("login : success username:" + username + " password :" + password);
    } else  {
        console.log("login : failure");
    }
}

function registAction() {

    console.log("regist");

    window.location.href = "../regist/regist.html";

}

window.onload = function () {


    var params = getparms();
    var username = params["username"];
    console.log("username : " + params["username"]);
    var usernameObj = document.getElementById("username");


    if (typeof (Storage) != undefined) {

        console.log("localStrge: " + localStorage.getItem("password"));

    } else  {
        console.log("不支持sorge");
    }

    if (username != null && username != "") {
        usernameObj.value = username;
    }


}