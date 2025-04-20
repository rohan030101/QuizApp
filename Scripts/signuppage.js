console.log("SignUp");

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const password = document.getElementById('passwordField');



document.addEventListener("submit", function (e){
    console.log(userName.value);
    console.log(userEmail.value);
    console.log(password.value);
    
    const users = localStorage.getItem('users')||[];
    const signupUser = {
        name : userName.value,
        email : userEmail.value,
        pass: password.value
    }
    users.push(signupUser)
    localStorage.setItem('users',JSON.stringify(users))

    
})
