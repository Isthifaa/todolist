
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