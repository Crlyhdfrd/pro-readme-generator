// TODO: Include packages needed for this application
const readlinesync = require("readline-sync");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },

  {
    type: "input",
    name: "installation",
    message: "How will your project intalled?",
  },

  {
    type: "input",
    name: "contributors",
    message: "What is your project contributing?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
  },

  {
    type: "input",
    name: "testing",
    message: "What is your project testing?",
  },
  {
    type: "list",
    name: "license",
    message: "What is your project license? Enter MIT, APACHE, GPL, BSD, or NONE",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "questions",
    message: "Any Questions?",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if (err) {
      return console.log(err)
    }
    console.log("Success!")
  })
}

function askQuestions () {
  let answers = []
  let userinput = readlinesync.question (questions[0].message)
  answers.push(userinput)
  userinput = readlinesync.question(questions[1].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[2].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[3].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[4].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[5].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[6].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[7].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[8].message);
  answers.push(userinput)
  userinput = readlinesync.question(questions[9].message);
  answers.push(userinput)
  return answers 
}


//TODO: Create a function to initialize app
function init() {
  let answers = askQuestions();
  // let answers = [
  //   "generator",
  //   "description",
  //   "installation",
  //   "usage",
  //   "contributing",
  //   "testing",
  //   "MIT,",
  //   "Crlyhdfrd",
  //   "email",
  //   "questions",
  // ];
  output = generateMarkdown(answers);
  // console.log(output);
  // console.log(answers);
  // writeToFile("README.md", generateMarkdown( answers ));
  writeToFile("README.md",  output);
    }

// Function call to initialize app

init();
