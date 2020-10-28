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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateQuizQuestion(){
  console.log("generateQuizQuestion");
  //use question data to generate HTML
  //answer index starts at 0 so subtract from questionNumber.
  let question = store.questions[store.questionNumber-1].question;
  let answerList = store.questions[store.questionNumber-1].answers;
  //start the form
  let questionHTML = `<form id = "answerForm" class = "answerForm">
                        <p>${question}</p>
                        ${generateAnswerList(answerList)}
                        <button type="submit" id="submitButton">Submit</button>
                      </form>`;

  //add questionHTML to the page
  return questionHTML;

}

function generateAnswerList(answerList){
  //generate list of possible answers with radio button element for each option
  let answerListHTML = ''
  answerList.forEach(element => {
    answerListHTML +=`<p class = "answerList">
                      <input type="radio" id=${element} name="choice" value=${element}>
                      <label for=${element}>${element}</label>
                      </p>`;
  });
  return answerListHTML;
}

function generateAnswerComment(isCorrect){
  //if answer correct say "correct"
  //if answer wrong say "incorrect" and display the correct answer
  let comment = ""
  if(isCorrect){
    comment = "<p>Correct</p>";
  }
  else{
    comment = "Incorrect. The correct answer is {store[questionNumber].correctAnswer}";
  }
  //add comment to the page
  return comment;
}

function generateScoreAndNumber(){
  //generate the current quiz score and question number
  scoreAndNumberHTML =  `<div>
                        <p>Question:${store.questionNumber}/5</p>
                        <p>Score:${store.score}/5</p>
                        </div>`;
  return scoreAndNumberHTML;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(){
  //clear main html
  $('main').html('');
  if(store.quizStarted === false){
    $('main').html(handleWelcomePage());
  }
  else{
    $('main').html(generateScoreAndNumber()+generateQuizQuestion());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleWelcomePage(){
  //generate welcome page
  console.log("handleWelcomePage")
  let welcomeHTML = `<div class="start-screen">
                      <p>This quiz has questions about the game Dungeons and Dragons</p>
                      <button type="button" id="start">Begin Quiz</button>
                    </div>
                    `;
  
  return welcomeHTML;
}

function handleBeginQuiz(){
  //when Start Quiz button is pressed show the first question
  console.log("begin quiz")
  $('body').on('click', '#start', function (event) {
    store.quizStarted = true;
    store.questionNumber = 1;
    store.score = 0;
    render();
  });
}

function handleAnswerSubmitted(){
  //get the choice selection
  console.log("handleAnswerSubmitted")
  $('body').on('submit','answerform',function(event){
    console.log("answer submitted");
    event.preventDefault();
    //get the answer from the form
    //extract the value from the selection

    let selectedAnswer = "Player's Handbook"
  });
  //send to grader function
  scoreQuestion(selectedAnswer);

  //call answer tooltip function to display correct or incorrect information
  //

}

function scoreQuestion(choice){
  console.log("Scoring question");
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
  //increment question number regardless of score
  store.questionNumber++;
}

function handleQuizApp(){
  render();
  handleBeginQuiz();
  //handleNextQuestion();
}

$(handleQuizApp)