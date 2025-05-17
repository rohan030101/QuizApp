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


function toQuizApp(){
  addEventListener('click',()=>{
    location.replace('/pages/quiz-page.html');  
  });
}



/************* Login Page & Signup Page *************/ 

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("passwordField");
const singUpForm = document.getElementById("sign-up");
const errorEmail = document.getElementById("errorEmail");
const errorName = document.getElementById("error-name");

// document.addEventListener("submit", (e) => {
//   e.preventDefault();
// });


//localstorage Declaration 
let getLocalStorageUser = JSON.parse(localStorage.getItem('users'));


//Add user to localstorage:
function addUser(fullName, userEmail, password){
let newUser = {
  name: fullName,
  email:userEmail,
  password:password,
  id: new Date().toISOString()
}
getLocalStorageUser.push(newUser);

localStorage.setItem('users', JSON.stringify(getLocalStorageUser));
console.log("user Added");

} 


//SignUp Page Validation
singUpForm.addEventListener("submit", function (e) {
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(userName.value)) {

    console.log("Error in name");
    errorName.innerHTML = "Please enter Valid name";
    e.preventDefault();
  
  } else if (!emailregex.test(userEmail.value)) {
  
    console.log("Error in email id");
    errorEmail.innerHTML = "Please enter valid email address!";
    e.preventDefault();
  
  } else {
    console.log(addUser(userName,userEmail,password));
    console.log("SignUp");
    alert("SignUp Successfully");
  }

  
});

/************* Login Page & Signup Page Ends Here *************/ 