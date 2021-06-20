
function addLi(){
    let item = document.createElement("li");
    item.innerHTML = "张思睿: " + document.getElementById("words").value;
    document.getElementById("comment-list").appendChild(item);
}