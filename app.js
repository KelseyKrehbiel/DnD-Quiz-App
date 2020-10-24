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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)