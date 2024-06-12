var logout=document.getElementById("Logout")
var backLink=document.querySelector("button a")

logout.addEventListener("click",back)
function back(){
    backLink.setAttribute("href","index.html")
}

var index=sessionStorage.getItem("index")
var users;
if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

var content=document.getElementById("content")
content.textContent = users[index].name;

