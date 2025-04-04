console.log("Script Loaded");

//To toggle the password visibilty
let toggle = document.getElementById("togglePassword");
let passwordFiled = document.getElementById("passwordFiled");

toggle.addEventListener("click", () => {
  if (passwordFiled.type === "password") {
    passwordFiled.type = "text";
    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");
    console.log(passwordFiled.type);
  } else {
    passwordFiled.type = "password";
    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye");
    console.log(passwordFiled.type);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("users") === null) {
    let users = {
      fullName: "Dummy",
      userEmail: "Dummy@gmail.com",
      userPassword: "Dummy@123",
    };
    console.log("users not exits");
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    console.log("users exits");
  }
});

//Login and Signup Section
function validateUser() {
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("passwordFiled").value;

  usersList = JSON.parse(localStorage.getItem('users'));
  console.log(usersList);


  if(usersList.userEmail == userEmail && usersList.userPassword == userPassword) {
    console.log('match');
  }
}

let users = localStorage.getItem("users");
console.log(users);
