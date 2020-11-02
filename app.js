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
      correctAnswer: "Player's Handbook",
      submittedAnswer: false
    },
    {
      question: 'What is not a core attribute for player characters?',
      answers: [
        'Wisdom',
        'Strength',
        'Charisma',
        'Grit'
      ],
      correctAnswer: 'Grit',
      submittedAnswer: false
    },
    {
      question: 'What is the standard notation for a six sided dice?',
      answers: [
        '6sd',
        'ssd',
        'd6',
        'cube'
      ],
      correctAnswer: 'd6',
      submittedAnswer: false
    },
    {
      question: 'What is the name of the class that specializes in stealth and Sneak Attacks?',
      answers: [
        'rouge',
        'rogue',
        'barbarian',
        'sneakster'
      ],
      correctAnswer: 'rogue',
      submittedAnswer: false
    },
    {
      question: 'How much distance does a grid square represent on a battle map?',
      answers: [
        '5 feet',
        '3 meters',
        '12 inches',
        '1 mile'
      ],
      correctAnswer: '5 feet',
      submittedAnswer: false
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  answerFeedback: ''
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
  let questionHTML = `<form id = "answer-Form" class = "answer-Form">
                        <p>${question}</p>
                        ${generateAnswerList(answerList)}
                        <button type="submit" id="submit-Button">Submit</button>
                        <button type="button" id="next-Button">Next</button>
                      </form>`;

  //add questionHTML to the page
  return questionHTML;

}

function generateAnswerList(answerList){
  //generate list of possible answers with radio button element for each option
  /*
    <label>
    <input type="radio" name="gender" value="male" required>
    Male
  </label><br>
  */
  let answerListHTML = ''
  answerList.forEach(element => {
    answerListHTML +=`<label class = "answerList">
                      <input type="radio" id="${element}" name="option" value="${element}" required>
                      ${element}
                      </label>`;
  });
  return answerListHTML;
}

function generateAnswerComment(){
  //if answer correct say "correct"
  //if answer wrong say "incorrect" and display the correct answer
  let isCorrect = store.questions[store.questionNumber-1].submittedAnswer === store.questions[store.questionNumber-1].correctAnswer;
  console.log("generateAnswerComment");
  let commentHTML = ""
  if(isCorrect){
    commentHTML = "<div><p>Correct</p></div>";
  }
  else{
    commentHTML = ` <div>
                      <p>Incorrect. The correct answer is ${store.questions[store.questionNumber-1].correctAnswer}</p>
                    </div>`;
  }
  //add comment to the page
  return commentHTML;
}

function generateScoreAndNumber(){
  //generate the current quiz score and question number
  scoreAndNumberHTML =  `<div>
                        <p>Question:${store.questionNumber}/5</p>
                        <p>Score:${store.score}/5</p>
                        </div>`;
  return scoreAndNumberHTML;
}

function generateResultsPage(){
  //generate the ending results page
  //should display score and have option to restart
  let resultsHTML = `<div>
                      <h1 class="results">Final Score</h1>
                      <h1 class="results">${store.score}/5</h1>
                      </div>
                    <div>
                      <p>Press the Restart button to play again</p>
                      <p><button type="button" id="reset-Button">Restart</button></p>
                    </div>`;
  return resultsHTML;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(){
  console.log("render")
  //clear main html
  //$('main').html('');
  let currentQuestion = store.questions[store.questionNumber-1];
  if(store.quizStarted === false){
    $('main').html(handleWelcomePage());
  }
  else if(store.questionNumber > 5){
    //out of questions. Show the results
    $('main').html(generateResultsPage());
  }
  //if question answered give feedback
  else if(currentQuestion.submittedAnswer){
    $('main').html(generateScoreAndNumber()+generateQuizQuestion()+generateAnswerComment());
    // disable all inputs
    
    $('input[type=radio]').attr('disabled', true);
  
    $('#submit-Button').hide();
    $('#next-Button').show();
  }
  //if not answered display question
  else{
    $('main').html(generateScoreAndNumber()+generateQuizQuestion());
    $('#submit-Button').show();
    $('#next-Button').hide();
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
  //when the 'answerForm' form is submitted do stuff
  $('body').on('submit','#answer-Form',function(event){
    console.log("answer submitted");
    event.preventDefault();
    //get the answer from the form
    //extract the value from the selection
    store.questions[store.questionNumber-1].submittedAnswer = $('input:checked').val()
    console.log(store.questions[store.questionNumber-1].submittedAnswer);
    //call grader function
    scoreQuestion();
    render();
  });
}

function scoreQuestion(){
  console.log(`Scoring question ${store.questionNumber}`);
  //compare it to the correct answer
  //determine if answer is correct
  //Update quiz score
  choice = store.questions[store.questionNumber-1].submittedAnswer;
  if(choice === store.questions[store.questionNumber-1].correctAnswer){
    console.log(`${choice} = ${store.questions[store.questionNumber-1].correctAnswer}`)
    store.score++;
    store.answerFeedback = true;
  }
  else{
    store.answerFeedback = false;
  }
}

function handleNextQuestion(){
  $('body').on('click','#next-Button',function(event){
    console.log("next-Button clicked")
    store.questionNumber++;
    console.log(`question ${store.questionNumber}`);
    render();
  });
}

function handleResetQuiz(){
  //reset quiz values
  $('body').on('click','#reset-Button',function(event){
    console.log("resetting quiz");
    store.questionNumber = 0;
    store.quizStarted = false;
    store.score = 0;
    //reset the submitted answers
    for(let q=0; q < store.questions.length; q++){
      store.questions[q].submittedAnswer = false;
    }
    render();
  });
}

function handleQuizApp(){
  render();
  handleBeginQuiz();
  handleAnswerSubmitted();
  handleNextQuestion();
  handleResetQuiz();
}

$(handleQuizApp)