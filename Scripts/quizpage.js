/************* Quiz Page Start Here *************/

const questionCount = document.getElementById("noOfQuestions");
const questionss = document.getElementById("questionText");
const options = document.getElementById("options");
const previousQues = document.getElementById("previous");
const nextQuestion = document.getElementById("submitAndNext");
const timer = document.getElementById("timer");
const radios = document.getElementsByName("option");
const progressBar = document.querySelector(".progress-bar");
const exitQuiz = document.getElementById('exitQuiz');
let currentWidth = Math.min(100, progressBar.style.width) + 10;
let storeQtAns = [];
let questionIndex = 0;
let score = 0;
previousQues.disabled = false;
const questions = JSON.parse(localStorage.getItem("currentQuizQuestions"));
const users = JSON.parse(localStorage.getItem("users"));

// console.log(users.tests);

// console.log(questions[0].answer);
function renderQuestion(index) {
  if (index >= questions.length) {
    let test = {
      testId: new Date().toISOString(),
      submittedTest: JSON.parse(localStorage.getItem("test")),
      totalScore: score,
    };
    alert(JSON.stringify(localStorage.getItem("test")));
    let loggedInUser = users.find(
      (user) => user.email === JSON.parse(localStorage.getItem("userloggedIn"))
    );
    console.log(loggedInUser);
    loggedInUser.tests.push(test);
    alert("Submit and Exit");
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("test");
    location.replace("/pages/dashboard-page.html");
    return;
  }

  questionCount.innerHTML =
    questionIndex === 8
      ? "Last 2 Questions Left"
      : questionIndex === 9
      ? "Last Questions Left"
      : `Question ${questionIndex + 1} of ${questions.length}`;

  questionss.innerHTML = questions[questionIndex].question;
  options.innerHTML = "";
  for (let a = 0; a < Object.keys(questions[0].options).length; a++) {
    // Check if the current question has a stored answer
    const storedAnswer = storeQtAns.find(
      (ans) => ans.questIndex === questionIndex
    );
    const isChecked =
      storedAnswer &&
      storedAnswer.seletedOption == questions[questionIndex].options[a].id
        ? "checked"
        : "";
    options.innerHTML += `<input type="radio" class="question-option" name="option" id="${a}" value="${questions[questionIndex].options[a].id}" ${isChecked}> <label for="${a}">${questions[questionIndex].options[a].value}</label> <br>`;
  }
}
function timeEvent() {
  let quizTime = 1799;
  // timer.innerHTML = `${Math.floor(quizTime/60)-1} : 00 Minitues Remaining`
  const countDown = setInterval(() => {
    let minitues = Math.floor(quizTime / 60);
    let seconds = quizTime % 60;
    quizTime--;
    timer.innerHTML = `${minitues} : ${seconds} Minitues Remaining`;

    if (quizTime < 0) {
      alert("Times Up");
      location.replace("/pages/rank-page.html");
      clearInterval(countDown);
    }
  }, 1000);
}

window.addEventListener('load',()=> {
  timeEvent();
  if (questionIndex < 0) {
    console.log(questionIndex);
    previousQues.disabled = true;
  }

  renderQuestion(questionIndex);
  nextQuestion.addEventListener("click", () => {
    console.log(currentWidth + 10);
    const selectedRaionBtn = document.querySelector(
      'input[name="option"]:checked'
    );

    if (selectedRaionBtn) {
      console.log(selectedRaionBtn.value == questions[questionIndex].answer);
      if (selectedRaionBtn.value == questions[questionIndex].answer) {
        console.log((score = score + 100));
      }
      const selectedAnswer = {
        questIndex: questionIndex,
        quest: questions[questionIndex].question,
        seletedOption: selectedRaionBtn.value,
        correctAnswer: questions[questionIndex].answer,
      };
      storeQtAns.push(selectedAnswer);
      localStorage.setItem("test", JSON.stringify(storeQtAns));
      questionIndex++;
      progressBar.style.width = (currentWidth += 10) + "%";
    } else {
      alert("please selete and answer");
    }
    renderQuestion(questionIndex);
  });

  previousQues.addEventListener("click", () => {
    if (questionIndex > 0) {
      questionIndex--;
      progressBar.style.width = (currentWidth -= 10) + "%";
      renderQuestion(questionIndex);
    }
  });
});

exitQuiz.addEventListener('click',()=> {
  alert("This will end the quiz and will not save anything");
  localStorage.removeItem('test');
  location.replace("../pages/dashboard-page.html");
})  


/************* Quiz Page Ends Here *************/
