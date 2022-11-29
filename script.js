//Adds a new task when button is clicked
var btn = document.getElementById("btn");
var txt = document.getElementById("txt");
var div = document.getElementById("mylist");

btn.addEventListener("click", function(){
var list = document.createElement("div");
list.innerHTML += txt.value + '<input type="checkbox" id="delete" onclick="deleteList()">';
if (txt.value === '') {
    alert("Please Enter a Task!");
} else {
  div.appendChild(list);
}
document.getElementById("txt").value = "";
}
);

//Delete task when checkbox is checked
function deleteList() {
document.getElementById("delete").parentElement.remove();
} 
