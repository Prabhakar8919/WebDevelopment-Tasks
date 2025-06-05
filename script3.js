// Navigation
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// Quiz logic
const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answers: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheet", "Computer Style Sheet"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopter Turbo Motor Launch"],
    correct: "Hypertext Markup Language"
  }
];

let currentQuestionIndex = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("quiz-btn");
    btn.addEventListener("click", () => selectAnswer(btn, answer === currentQuestion.correct));
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(selectedBtn, isCorrect) {
  const allButtons = document.querySelectorAll(".quiz-btn");
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === questions[currentQuestionIndex].correct) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  selectedBtn.classList.add(isCorrect ? "correct" : "wrong");
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.innerText = "🎉 You've completed the quiz!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

// Initialize
showSection('home');
showQuestion();
// Joke Fetching Logic
const jokeBtn = document.getElementById('jokeBtn');
const jokeBox = document.getElementById('jokeBox');

jokeBtn.addEventListener('click', async () => {
  jokeBox.textContent = 'Loading...';
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    jokeBox.textContent = data.joke;
  } catch (error) {
    jokeBox.textContent = 'Oops! Could not fetch a joke right now.';
  }
});
