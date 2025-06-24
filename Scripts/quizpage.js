/************* Quiz Page Start Here *************/

const questionCount = document.getElementById("noOfQuestions");
const progressBar = document.getElementById("progress-bar");
const question = document.getElementById("questionText");
const options = document.getElementById("options");
const previousQues = document.getElementById("previous");
const nextQuestion = document.getElementById("submitAndNext");
const timer = document.getElementById("timer");
const radios = document.querySelectorAll('input[name="option"]');
const userResponse = {};
let storeQtAns = [];
let questionIndex = 0;

//creates a shallow copy of main quetion arra and return it
function shuffleQuestions() {
  const shuffle = [...questionsArr];
  let i = shuffle.length,
    j,
    temp;

  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffle[j];
    shuffle[j] = shuffle[i];
    shuffle[i] = temp;
  }

  return shuffle.slice(0, 10);
}
const questions = shuffleQuestions();

function addQuestToUser() {
  const users = JSON.parse(localStorage.getItem("users"));

  const targetEmail = JSON.parse(localStorage.getItem("userloggedIn"));

  console.log(targetEmail);

  const newTest = {
    score: "100",
    questions: questions[0],
    date: new Date().toISOString(),
  };

  const userIndex = users.findIndex((user) => user.email == targetEmail);
  console.log(userIndex);

  if (userIndex !== -1) {
    users[userIndex].tests.push(newTest);
    console.log("Data Pushed");
  }

  localStorage.setItem("users", JSON.stringify(users));
}

function renderQuestion(index) {
  if (index >= questions.length) {
    alert("Submit and Exit");
    location.replace("/pages/dashboard-page.html");
    return;
  }

  questionCount.innerHTML = `Question ${questionIndex + 1} of  ${
    questions.length
  }`;

  question.innerHTML = questions[questionIndex].question;
  options.innerHTML = "";

  for (let a = 1; a <= Object.keys(questions[0].options).length; a++) {
    options.innerHTML += `<li><input type="radio" name="options" id="opt"> ${questions[questionIndex].options[a]} <li> `;
  }

}

function timeEvent() {
  let quizTime = 1799;
  const countDown = setInterval(() => {
    let minitues = Math.floor(quizTime / 60);
    let seconds = quizTime % 60;
    quizTime--;
    // console.log(quizTime);
    timer.innerHTML = `${minitues} : ${seconds} remaining`;

    if (quizTime <= 0) {
      alert("Times Up");
      location.replace("/pages/rank-page.html");
      clearInterval(countDown);
    }
  }, 1000); 
}

function displayQuestion() {
  renderQuestion(questionIndex);
  nextQuestion.addEventListener("click", () => {
    questionIndex++;
    storeQtAns += JSON.stringify(questions[questionIndex]);
    console.log(storeQtAns);
    renderQuestion(questionIndex);
  });

  previousQues.addEventListener("click", () => {
    questionIndex--;
    renderQuestion(questionIndex);
    console.log("Test");
  });
}

function exitQuiz() {
  alert("This will end the quiz and will not save anything");
  location.replace("pages/dashboard-page.html");
}

window.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  timeEvent();
});

/************* Quiz Page Ends Here *************/
