if (window.location.pathname.endsWith("/pages/signup.html")) {
  signup();
}

//To toggle the password visibilty
let toggle = document.getElementById("togglePassword");
let passwordFiled = document.getElementById("passwordField");

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

function toQuizApp() {
  addEventListener("click", () => {
    location.replace("/pages/quiz-page.html");
  });
}

/************* Login Page & Signup Page *************/

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("passwordField");
const singUpForm = document.getElementById("sign-up");
const loginForm = document.getElementById("login");
const errorEmail = document.getElementById("errorEmail");
const errorName = document.getElementById("error-name");
const erroPass = document.getElementById("error-pass");

document.addEventListener("submit", (e) => {
  e.preventDefault();
});

//if localstorage is empty
// let dummyUser = {
//     name: "Dummy",
//     email: "Dummy@gmail.com",
//     password: "Dummy@1234",
//     id: new Date().toISOString(),
//   };
// localStorage.setItem('users', JSON.stringify([dummyUser]));

//localstorage Declaration
let getLocalStorageUser = JSON.parse(localStorage.getItem("users"));

//Add user to localstorage:
function addUser(fullName, userEmail, password) {
  console.log(fullName);
  console.log(userEmail);
  console.log(password);
  let newUser = {
    name: fullName,
    email: userEmail,
    password: password,
    id: new Date().toISOString(),
  };
  getLocalStorageUser.push(newUser);

  localStorage.setItem("users", JSON.stringify(getLocalStorageUser));
  console.log("user Added");
}

// SignUp Page Validation and Adding user to localstorage
singUpForm.addEventListener("submit", function signup(e) {
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernnameRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!usernnameRegex.test(userName.value)) {
    console.log("Error in name");
    errorName.innerHTML = "Please enter Valid name";
    e.preventDefault();
  } else if (!emailregex.test(userEmail.value)) {
    console.log("Error in email id");
    errorEmail.innerHTML = "Please enter valid email address!";
    e.preventDefault();
  } else if (!passwordRegex.test(password.value)) {
    console.log(
      "Password Should be  8 characters, Uppercase , Lowercase, Special Character and Numbers"
    );
    erroPass.innerHTML =
      "Password Should be  8 characters, Uppercase , Lowercase, Special Character and Numbers";
    e.preventDefault();
  } else {
    console.log(addUser(userName.value, userEmail.value, password.value));
    console.log("SignUp");
    alert("SignUp Successfully");
    location.replace("/index.html");
  }
});

loginForm.addEventListener("submit", () => {
  let users = JSON.parse(localStorage.getItem("users"));
  let matchUser = users.find(
    (user) => user.email === userEmail.value && user.password === password.value
  );

  if (matchUser != undefined) {
    alert("Welcome" + userEmail.value);
    location.replace("/pages/dashboard-page.html");
  } else {
    alert("Login ID Password Incorrect");
    location.reload();
  }
});

/************* Login Page & Signup Page Ends Here *************/
