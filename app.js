/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the name of the core rule book used to create player characters?',
      answers: [
        "Dungeon Master's Guide",
        "Monster Manuel",
        "Character Guide",
        "Player's Handbook"
      ],
      correctAnswer: "Player's Handbook"
    },
    {
      question: 'What is not a core attribute for player characters?',
      answers: [
        'Wisdom',
        'Strength',
        'Charisma',
        'Grit'
      ],
      correctAnswer: 'Grit'
    },
    {
      question: 'What is the standard notation for a six sided dice?',
      answers: [
        '6sd',
        'ssd',
        'd6',
        'cube'
      ],
      correctAnswer: 'd6'
    },
    {
      question: 'What is the name of the class that specializes an stealth and Sneak Attacks?',
      answers: [
        'rouge',
        'rogue',
        'barbarian',
        'sneakster'
      ],
      correctAnswer: 'rogue'
    },
    {
      question: 'How much distance does a grid square represent on a battle map?',
      answers: [
        '5 feet',
        '3 meters',
        '12 inches',
        '1 mile'
      ],
      correctAnswer: '5 feet'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GEN/ERATION FUNCTIONS **********/

// These functions return HTML templates
function generateQuizQuestion(questionNumber){
  //use quesiton data to generate HTML
  let quesiton = store[questionNumber].question;
  let answerList = store[questionNumber].answers;
  //start the form
  let questionHTML = `<form action="/action_page.php">
                        <p>{question}</p>`
  //add radio button element for each option
  answerList.forEach(element => {
    questionListHTML =`<input type="radio" id={element} name="choice" value={element}>
                      <label for={element}>{element}</label>`;
    questionHTML += questionListHTML; 
  });
  //complete the form
  questionHTML += `</form>`
  //add questionHTML to the page

}

function generateAnswerComment(isCorrect){
  //if answer correct say "correct"
  //if answer wrong say "incorrect" and display the correct answer
  let comment = ""
  if(isCorrect){
    comment = "<p>Correct</p>"
  }
  else{
    comment = "Incorrect. The correct answer is {store[questionNumber].correctAnswer}"
  }
  //add comment to the page
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz(){
  //render the page with appropriate elements
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleWelcomePage(){
  //load the welcome page
  let welcomeHTML = `<div class="start-screen">
                      <p>This quiz has questions about the game Dungeons and Dragons</p>
                      <button type="button" id="start">Begin Quiz</button>
                    </div>
                    `;
  return welcomeHTML;
}

function handleBeginQuiz(){
  //when Start Quiz button is pressed show the first question
  $('body').on('click', '#start', function (event) {
    store.quizStarted = true;
    renderQuiz();
  });
}

function handleAnswerSubmitted(){
  //get the choice selection
  //let choice = 
  //send to grader function

  //call answer tooltip function to display correct or incorrect information
  //

}

function scoreQuestion(choice){
  //compare it to the correct answer
  //determine if answer is correct
  //Update quiz score
  //return true or false if answer is correct
  if(choice === store[questionNumber].correctAnswer){
    score++;
    generateAnswerComment(true);
  }
  else{
    generateAnswerComment(false);
  }
}

function handleQuizApp(){
  renderQuiz();
}
