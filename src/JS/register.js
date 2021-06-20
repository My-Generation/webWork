function check() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    if(username!==null && password!==null && email!==null){
        alert("注册成功");
    }else if(username===null){
        alert("请输入用户名！");
        return;
    }else if(password===null){
        alert("请输入密码！");
        return;
    }else if(email===null){
        alert("请输入邮箱!");
        return;
    }
}
