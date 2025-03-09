console.log("Script Loaded");




//To toggle the password visibilty
let toggle = document.getElementById('togglePassword');
let passwordFiled = document.getElementById('passwordFiled');

toggle.addEventListener('click',()=>{
    if(passwordFiled.type === "password"){
        passwordFiled.type = "text";
        toggle.classList.remove("fa-eye");
        toggle.classList.add('fa-eye-slash');
        console.log(passwordFiled.type);
    }
    else{
        passwordFiled.type = "password";
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
        console.log(passwordFiled.type);

    }

})