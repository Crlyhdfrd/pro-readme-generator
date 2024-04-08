// TODO: Include packages needed for this application
const readlinesync = require("readline-sync")
const fs = require ("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const questions = require("./utils/questions")

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
  let userinput = readlinesync.question (questions[0])
  answers.push(userinput)
  userinput = readlinesync.question (questions[1])
  answers.push(userinput)
  userinput = readlinesync.question (questions[2])
  answers.push(userinput)
  userinput = readlinesync.question (questions[3])
  answers.push(userinput)
  userinput = readlinesync.question (questions[4])
  answers.push(userinput)
  userinput = readlinesync.question (questions[5])
  answers.push(userinput)
  userinput = readlinesync.question (questions[6])
  answers.push(userinput)
  userinput = readlinesync.question (questions[7])
  answers.push(userinput)
  userinput = readlinesync.question (questions[8])
  answers.push(userinput)
  userinput = readlinesync.question (questions[9])
  answers.push(userinput)
  return answers 
}


//TODO: Create a function to initialize app
function init() {
  // let answers = askQuestions();
  let answers = ["generator", "description", "installation", "usage", "contributing", "testing", "MIT", "Crlyhdfrd", "email", "questions"]; 
  output = generateMarkdown(answers);
  console.log(output);
  // writeToFile("README.md", generateMarkdown({ answers }));
  writeToFile("README.md",  output);
    }

// Function call to initialize app

init();
