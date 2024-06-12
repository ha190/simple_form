// Sign Up
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signUp = document.getElementById("signup");
var alerting = document.getElementById("alerting");
var success = document.getElementById("success");
var exists = document.getElementById("exists");
var users;


if (localStorage.getItem("users") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

signUp.addEventListener("click", addUser);

function addUser() {
  if (!nameInput.value || !emailInput.value || !passwordInput.value) {
    alerting.classList.replace("d-none", "d-flex");
    success.classList.replace("d-flex", "d-none");
  }
   else 
   {
    var userInfo = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    if (checkSignUP(userInfo.email)) {
      exists.classList.replace("d-none", "d-flex");
      alerting.classList.replace("d-flex", "d-none");
      success.classList.replace("d-flex", "d-none");
    } else {
      users.push(userInfo);
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users);
      exists.classList.replace("d-flex", "d-none")
      alerting.classList.replace("d-flex", "d-none");
      success.classList.replace("d-none", "d-flex");
    }
    clear();
  }
}

function clear() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
}

function checkSignUP(id) {
  for (var i = 0; i < users.length; i++) {
    if (id == users[i].email) {
      return true;
    }
  }
}
