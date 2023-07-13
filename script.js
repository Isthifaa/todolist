
document.getElementById("btn").onclick = function() {
    var text = document.getElementById("newText").value;
    var li = document.createElement("li");
    if(text == "") {
        alert("Please enter a task");
    }else {
    li.innerHTML = text;
    document.getElementById("listitem").appendChild(li);
    }
}
//add, delete, modify

function add() {
    var text = document.getElementById("newText").value;
    var li = document.createElement("li");
    if(text == "") {
        alert("Please enter a task");
    }else {
    li.innerHTML = text;
    document.getElementById("listitem").appendChild(li);
    }
}

function del() {
    var list = document.getElementById("listitem");
    list.removeChild(list.childNodes[0]);
}

function mod() {
    var text = document.getElementById("newText").value;
    var list = document.getElementById("listitem");
    list.childNodes[0].innerHTML = text;
}
//mark as done using javascript
function done() {
    var list = document.getElementById("listitem");
    list.childNodes[0].style.textDecoration = "line-through";
}