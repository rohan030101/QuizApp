/************* Quiz Page Start Here *************/

const questionCount = document.getElementById("noOfQuestions");
const questionss = document.getElementById("questionText");
const options = document.getElementById("options");
const previousQues = document.getElementById("previous");
const nextQuestion = document.getElementById("submitAndNext");
const timer = document.getElementById("timer");
const radios = document.getElementsByName("option");
const progressBar = document.querySelector('.progress-bar');
let currentWidth = Math.min(100,progressBar.style.width) + 10 ;
console.log(currentWidth);

let storeQtAns = [];
let questionIndex = 0;
let score = 0;
const questions = JSON.parse(localStorage.getItem("currentQuizQuestions"));
// console.log(questions[0].answer);

function renderQuestion(index) {
  if (index >= questions.length) {
    alert(`Your total score is ` + score);
    alert("Submit and Exit");
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
    options.innerHTML += `<input type="radio" class="question-option" name="option" id="${a}" value="${questions[questionIndex].options[a].id}" ${isChecked}> ${questions[questionIndex].options[a].value} <br>`;
    
  }
}
function timeEvent() {
  let quizTime = 1799;
  const countDown = setInterval(() => {
    let minitues = Math.floor(quizTime / 60);
    let seconds = quizTime % 60;
    quizTime--;
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
    console.log(currentWidth+10);
    const selectedRaionBtn = document.querySelector(
      'input[name="option"]:checked'
    );
    
    if (selectedRaionBtn) {
      console.log(selectedRaionBtn.value == questions[questionIndex].answer);
      if(selectedRaionBtn.value == questions[questionIndex].answer){
        console.log(score= score +  100);
      }
      let seletedAnswer = {
        questIndex: questionIndex,
        seletedOption: selectedRaionBtn.value,
        testScore: score,
      };
      storeQtAns.push(seletedAnswer);
      localStorage.setItem("test", JSON.stringify(storeQtAns));
      questionIndex++;
        progressBar.style.width = (currentWidth+=10) +"%"
      
    } else {
      alert("please selete and answer");
    }
    renderQuestion(questionIndex);
  });

  previousQues.addEventListener("click", () => {
    if (questionIndex > 0) {
      questionIndex--;
        progressBar.style.width = (currentWidth-=10) +"%"
      renderQuestion(questionIndex);
    }
  });
}

function addTests() {}

function exitQuiz() {
  alert("This will end the quiz and will not save anything");
  location.replace("../pages/dashboard-page.html");
}

window.addEventListener("load", () => {
  displayQuestion();
  timeEvent();
  addTests();
});

/************* Quiz Page Ends Here *************/
