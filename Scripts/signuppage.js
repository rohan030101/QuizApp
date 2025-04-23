const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("passwordField");
const singUpForm = document.getElementById("sign-up");
const errorEmail = document.getElementById("errorEmail");

// console.log(singUpForm);

singUpForm.addEventListener("submit", function (e) {
  // console.log(userName.value);
  // console.log(userEmail.value);
  // console.log(password.value);

  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailregex.test(userEmail.value)) {
    console.log("Error");
    errorEmail.innerHTML = "Please enter valid email address!";
    e.preventDefault();
    console.log(errorEmail);
  } else {
    console.log("SignUp");
    alert("SignUp Successfully");
  }
});
