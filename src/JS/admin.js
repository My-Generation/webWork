function check() {
    if(document.getElementById("username").value!="zhangsirui"
        && document.getElementById("password")!="513304") {
        alert("用户名或密码输入错误");
        return false;
    } else{
        window.open("adminConsole.html");
    }
}