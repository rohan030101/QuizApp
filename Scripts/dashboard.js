//creates a shallow copy of main quetion arra and return it
const questionsArr = [
  {
    index: 1,
    question: "What does HTML stand for?",
    options: [
      { id: 1, value: "Hyper Text Markup Language" },
      { id: 2, value: "Home Tool Markup Language" },
      { id: 3, value: "Hyperlinks and Text Markup Language" },
      { id: 4, value: "Hyper Tool Multi Language" },
    ],
    answer: "1",
  },
  {
    index: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: [
      { id: 1, value: "&lt;script&gt;" },
      { id: 2, value: "&lt;style&gt;" },
      { id: 3, value: "&lt;css&gt;" },
      { id: 4, value: "&lt;link&gt;" },
    ],
    answer: "2",
  },
  {
    index: 3,
    question: "What does CSS stand for?",
    options: [
      { id: 1, value: "Creative Style Sheets" },
      { id: 2, value: "Cascading Style Sheets" },
      { id: 3, value: "Computer Style Sheets" },
      { id: 4, value: "Colorful Style Sheets" },
    ],
    answer: "2",
  },
  {
    index: 4,
    question: "Which property is used to change the background color?",
    options: [
      { id: 1, value: "color" },
      { id: 2, value: "bgcolor" },
      { id: 3, value: "background-color" },
      { id: 4, value: "background" },
    ],
    answer: "3",
  },
  {
    index: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      { id: 1, value: "&lt;js&gt;" },
      { id: 2, value: "&lt;scripting&gt;" },
      { id: 3, value: "&lt;script&gt;" },
      { id: 4, value: "&lt;javascript&gt;" },
    ],
    answer: "3",
  },
  {
    index: 6,
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: [
      { id: 1, value: "-" },
      { id: 2, value: "=" },
      { id: 3, value: "*" },
      { id: 4, value: ":" },
    ],
    answer: "2",
  },
  {
    index: 7,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      { id: 1, value: "msgBox('Hello World')" },
      { id: 2, value: "alertBox('Hello World')" },
      { id: 3, value: "msg('Hello World')" },
      { id: 4, value: "alert('Hello World')" },
    ],
    answer: "4",
  },
  {
    index: 8,
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      { id: 1, value: "&lt;ul&gt;" },
      { id: 2, value: "&lt;ol&gt;" },
      { id: 3, value: "&lt;list&gt;" },
      { id: 4, value: "&lt;li&gt;" },
    ],
    answer: "1",
  },
  {
    index: 9,
    question: "Which CSS property controls the text size?",
    options: [
      { id: 1, value: "font-style" },
      { id: 2, value: "text-size" },
      { id: 3, value: "font-size" },
      { id: 4, value: "text-style" },
    ],
    answer: "3",
  },
  {
    index: 10,
    question: "How do you start a for loop in JavaScript?",
    options: [
      { id: 1, value: "for i = 1 to 5" },
      { id: 2, value: "for (i <= 5; i++)" },
      { id: 3, value: "for (i = 0; i <= 5; i++)" },
      { id: 4, value: "loop (i = 0; i <= 5)" },
    ],
    answer: "3",
  },
  {
    index: 11,
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      { id: 1, value: "&lt;break&gt;" },
      { id: 2, value: "&lt;lb&gt;" },
      { id: 3, value: "&lt;br&gt;" },
      { id: 4, value: "&lt;linebreak&gt;" },
    ],
    answer: "3",
  },
  {
    index: 12,
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: [
      { id: 1, value: "alt" },
      { id: 2, value: "title" },
      { id: 3, value: "src" },
      { id: 4, value: "longdesc" },
    ],
    answer: "1",
  },
  {
    index: 13,
    question: "Which property is used to change the font of an element in CSS?",
    options: [
      { id: 1, value: "font-style" },
      { id: 2, value: "font-weight" },
      { id: 3, value: "font-family" },
      { id: 4, value: "font-variant" },
    ],
    answer: "3",
  },
  {
    index: 14,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      { id: 1, value: "let" },
      { id: 2, value: "var" },
      { id: 3, value: "const" },
      { id: 4, value: "All of the above" },
    ],
    answer: "4",
  },
  {
    index: 15,
    question:
      "Which method adds an element at the end of an array in JavaScript?",
    options: [
      { id: 1, value: "push()" },
      { id: 2, value: "add()" },
      { id: 3, value: "insert()" },
      { id: 4, value: "append()" },
    ],
    answer: "1",
  },
  {
    index: 16,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      { id: 1, value: "onmouseclick" },
      { id: 2, value: "onchange" },
      { id: 3, value: "onmouseover" },
      { id: 4, value: "onclick" },
    ],
    answer: "4",
  },
  {
    index: 17,
    question: "How do you add a comment in a CSS file?",
    options: [
      { id: 1, value: "// this is a comment" },
      { id: 2, value: "/* this is a comment */" },
      { id: 3, value: "' this is a comment" },
      { id: 4, value: "&lt;!-- this is a comment --&gt;" },
    ],
    answer: "2",
  },
  {
    index: 18,
    question: "How do you write a comment in JavaScript?",
    options: [
      { id: 1, value: "# this is a comment" },
      { id: 2, value: "' this is a comment" },
      { id: 3, value: "// this is a comment" },
      { id: 4, value: "&lt;!-- this is a comment --&gt;" },
    ],
    answer: "3",
  },
  {
    index: 19,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      { id: 1, value: "&lt;a&gt;" },
      { id: 2, value: "&lt;link&gt;" },
      { id: 3, value: "&lt;href&gt;" },
      { id: 4, value: "&lt;hyperlink&gt;" },
    ],
    answer: "1",
  },
  {
    index: 20,
    question: "How can you make a numbered list in HTML?",
    options: [
      { id: 1, value: "&lt;ul&gt;" },
      { id: 2, value: "&lt;ol&gt;" },
      { id: 3, value: "&lt;dl&gt;" },
      { id: 4, value: "&lt;list&gt;" },
    ],
    answer: "2",
  },
];

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

let startQuiz = document.getElementById('startQuiz')

startQuiz.addEventListener('click',()=>{
  let quizQuestions = shuffleQuestions();
  localStorage.setItem('currentQuizQuestions',JSON.stringify(quizQuestions));
  location.replace("/pages/quiz-page.html"); 
})

// console.log(quizQuestions);


function logout(){
  localStorage.removeItem('currentQuizQuestions')
  localStorage.removeItem('userloggedIn');
  location.replace("../index.html");
}




