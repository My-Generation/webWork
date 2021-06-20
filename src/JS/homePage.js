function getById(id){
    var obj=document.getElementById(id);
    return obj;
}

function del(n) {
    getById('list').removeChild(getById(n));
}

function dele(n){
    getById('list1').removeChild(getById(n));
}

function delet(n){
    getById('list2').removeChild(getById(n));
}

function scienceAddLi(){
    let len = document.getElementById("list").getElementsByTagName("li").length;
    let item = document.createElement("li");
    let name = document.getElementById("science").value;
    let len0 = len+1001;
    item.id = len0;
    item.innerHTML = `<a href="detail.html">${name}</a><button onclick="del(${len0})">删除`;
    document.getElementById("list").appendChild(item);
}

function ancientAddLi(){
    let len = document.getElementById("list1").getElementsByTagName("li").length;
    let item = document.createElement("li");
    let name = document.getElementById("ancient").value;
    let len1 = len +2001;
    item.id = len1;
    item.innerHTML = `<a href="detail.html">${name}</a><button onclick="dele(${len1})">删除`;
    document.getElementById("list1").appendChild(item);
}

function novelAddLi(){
    let len = document.getElementById("list2").getElementsByTagName("li").length;
    let item = document.createElement("li");
    let name = document.getElementById("novel").value;
    let len2 = len + 3001;
    item.id = len2;
    item.innerHTML = `<a href="detail.html">${name}</a><button onclick="delet(${len2})">删除`;
    document.getElementById("list2").appendChild(item);
}