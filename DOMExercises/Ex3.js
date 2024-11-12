const questions = [
    {
      question: "How many days are there in a week",
      answers: ['5', '6', '7', '8'],
      correctAnswerIndex: 2
    },
    {
      question: "What do cows drink?",
      answers: ['Milk', 'Water', 'Orange Juice', 'Soda'],
      correctAnswerIndex: 1
    },
    {
      question: "What color is the pink rose?",
      answers: ['Blue', 'Green', 'Pink', 'Yellow'],
      correctAnswerIndex: 2
    },
    {
      question: "What is 2 + 2?",
      answers: ['10', '22', '5', '4'],
      correctAnswerIndex: 3
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionEl = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.btn');
  
    questionEl.textContent = question.question;
    answerButtons.forEach((button, index) => {
      button.textContent = question.answers[index];
      button.classList.remove('correct', 'incorrect');
      button.disabled = false; 
    });
  
    let nextButton = document.querySelector('.next-btn');
    if (!nextButton) {
      nextButton = document.createElement('button');
      nextButton.textContent = "Next Question";
      nextButton.classList.add('next-btn');
      nextButton.style.display = 'none'; 
      nextButton.addEventListener('click', nextQuestion);
      const quizContainer = document.querySelector('.quiz-container');
      quizContainer.appendChild(nextButton);
    }
  
    nextButton.style.display = 'none'; 
  }
  
  function checkAnswer(selectedButton) {
    const question = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.btn');
  
    const selectedIndex = Array.from(answerButtons).indexOf(selectedButton);
  
    if (selectedIndex === question.correctAnswerIndex) {
      selectedButton.classList.add('correct');
      score++;
    } else {
      selectedButton.classList.add('incorrect');
    }
  
    answerButtons.forEach(button => button.disabled = true);
  
    const nextButton = document.querySelector('.next-btn');
    nextButton.style.display = 'block'; 
    updateScore();
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      alert("Quiz Over! Your score is " + score);
    }
  }
  
  function updateScore() {
    const scoreEl = document.getElementById('score');
    scoreEl.textContent = "Score: " + score;
  }
  
  showQuestion();
  
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => checkAnswer(e.target));
  });
  