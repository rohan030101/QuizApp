const questionsArr = [
  {
    index: 1,
    question: "What does HTML stand for?",
    options: {
      1: "Hyper Text Markup Language",
      2: "Home Tool Markup Language",
      3: "Hyperlinks and Text Markup Language",
      4: "Hyper Tool Multi Language",
    },
    answer: "1",
  },
  {
    index: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: {
      1: "<script>",
      2: "<style>",
      3: "<css>",
      4: "<link>",
    },
    answer: "2",
  },
  {
    index: 3,
    question: "What does CSS stand for?",
    options: {
      1: "Creative Style Sheets",
      2: "Cascading Style Sheets",
      3: "Computer Style Sheets",
      4: "Colorful Style Sheets",
    },
    answer: "2",
  },
  {
    index: 4,
    question: "Which property is used to change the background color?",
    options: {
      1: "color",
      2: "bgcolor",
      3: "background-color",
      4: "background",
    },
    answer: "3",
  },
  {
    index: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    options: {
      1: "<js>",
      2: "<scripting>",
      3: "<script>",
      4: "<javascript>",
    },
    answer: "3",
  },
  {
    index: 6,
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: {
      1: "-",
      2: "=",
      3: "*",
      4: ":",
    },
    answer: "2",
  },
  {
    index: 7,
    question: "How do you write 'Hello World' in an alert box?",
    options: {
      1: "msgBox('Hello World')",
      2: "alertBox('Hello World')",
      3: "msg('Hello World')",
      4: "alert('Hello World')",
    },
    answer: "4",
  },
  {
    index: 8,
    question: "Which HTML tag is used to define an unordered list?",
    options: {
      1: "<ul>",
      2: "<ol>",
      3: "<list>",
      4: "<li>",
    },
    answer: "1",
  },
  {
    index: 9,
    question: "Which CSS property controls the text size?",
    options: {
      1: "font-style",
      2: "text-size",
      3: "font-size",
      4: "text-style",
    },
    answer: "3",
  },
  {
    index: 10,
    question: "How do you start a for loop in JavaScript?",
    options: {
      1: "for i = 1 to 5",
      2: "for (i <= 5; i++)",
      3: "for (i = 0; i <= 5; i++)",
      4: "loop (i = 0; i <= 5)",
    },
    answer: "3",
  },
  {
    index: 11,
    question: "What is the correct HTML element for inserting a line break?",
    options: {
      1: "<break>",
      2: "<lb>",
      3: "<br>",
      4: "<linebreak>",
    },
    answer: "3",
  },
  {
    index: 12,
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: {
      1: "alt",
      2: "title",
      3: "src",
      4: "longdesc",
    },
    answer: "1",
  },
  {
    index: 13,
    question: "Which property is used to change the font of an element in CSS?",
    options: {
      1: "font-style",
      2: "font-weight",
      3: "font-family",
      4: "font-variant",
    },
    answer: "3",
  },
  {
    index: 14,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: {
      1: "let",
      2: "var",
      3: "const",
      4: "All of the above",
    },
    answer: "4",
  },
  {
    index: 15,
    question:
      "Which method adds an element at the end of an array in JavaScript?",
    options: {
      1: "push()",
      2: "add()",
      3: "insert()",
      4: "append()",
    },
    answer: "1",
  },
  {
    index: 16,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: {
      1: "onmouseclick",
      2: "onchange",
      3: "onmouseover",
      4: "onclick",
    },
    answer: "4",
  },
  {
    index: 17,
    question: "How do you add a comment in a CSS file?",
    options: {
      1: "// this is a comment",
      2: "/* this is a comment */",
      3: "' this is a comment",
      4: "<!-- this is a comment -->",
    },
    answer: "2",
  },
  {
    index: 18,
    question: "How do you write a comment in JavaScript?",
    options: {
      1: "# this is a comment",
      2: "' this is a comment",
      3: "// this is a comment",
      4: "<!-- this is a comment -->",
    },
    answer: "3",
  },
  {
    index: 19,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: {
      1: "<a>",
      2: "<link>",
      3: "<href>",
      4: "<hyperlink>",
    },
    answer: "1",
  },
  {
    index: 20,
    question: "How can you make a numbered list in HTML?",
    options: {
      1: "<ul>",
      2: "<ol>",
      3: "<dl>",
      4: "<list>",
    },
    answer: "2",
  },
];

//To toggle the password visibilty
let toggle = document.getElementById("togglePassword");
let passwordFiled = document.getElementById("passwordField");

function passToggle() {
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
}

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

//localstorage Declaration
let getLocalStorageUser = JSON.parse(localStorage.getItem("users")) || [];

//if localstorage is empty

// if (getLocalStorageUser == null) {
//   let dummyUser = {
//     name: "Dummy",
//     email: "Dummy@gmail.com",
//     password: "Dummy@1234",
//     id: new Date().toISOString(),

//     tests: [],
//   };
//   localStorage.setItem("users", JSON.stringify([dummyUser]));
// }

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
    tests: [],
  };
  getLocalStorageUser.push(newUser);

  localStorage.setItem("users", JSON.stringify(getLocalStorageUser));
  console.log("user Added");
}

// SignUp Page Validation and Adding user to localstorage
function signup(e) {
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
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let matchUser = users.find((user) => user.email === userEmail.value);
    console.log(matchUser);
    if (matchUser == undefined) {
      console.log(addUser(userName.value, userEmail.value, password.value));
      console.log("SignUp");
      alert("SignUp Successfully");
      location.replace("/index.html");
    } else {
      alert("User already Exists");
    }
  }
}

function login() {
  let users = JSON.parse(localStorage.getItem("users"));
  let matchUser = users.find(
    (user) => user.email === userEmail.value && user.password === password.value
  );
  console.log(matchUser);

  if (matchUser != undefined) {
    alert("Welcome " + userEmail.value);
    localStorage.setItem("userloggedIn", JSON.stringify(userEmail.value));
    location.replace("/pages/dashboard-page.html");
  } else {
    alert("Login ID Password Incorrect");
    location.reload();
  }
}

/************* Login Page & Signup Page Ends Here *************/

