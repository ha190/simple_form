// Sign in
var emailLogin = document.getElementById("email-login");
var passwordLogin = document.getElementById("password-login");
var log = document.getElementById("Log");
var homeLink = document.querySelector("button a");
var alertt = document.getElementById("alertt");
var wrong = document.getElementById("wrong");
var users;

if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

log.addEventListener("click", checkUser);

function checkUser() {
  if (!emailLogin.value || !passwordLogin.value) {
    alertt.classList.replace("d-none", "d-flex");
    wrong.classList.replace("d-flex", "d-none");
  } else {
    var found = false;

    for (var i = 0; i < users.length; i++) {
      if (
        emailLogin.value == users[i].email &&
        passwordLogin.value == users[i].password
      ) {
        found = true;
        console.log("found");
        homeLink.setAttribute("href", "home.html");
        sessionStorage.setItem("index", i);
        break;
      }
    }
    if (found) {
      alertt.classList.replace("d-flex", "d-none");
      wrong.classList.replace("d-flex", "d-none");
    } else {
      wrong.classList.replace("d-none", "d-flex");
    }
  }
}
