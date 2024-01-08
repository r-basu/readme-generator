// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "user",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
  {
    type: "input",
    name: "title",
    message: "Enter projects title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a short description of the project:",
  },
  {
    type: "input",
    name: "install",
    message: "Enter installation instructions for the project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions for the project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines for the project:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for the project:",
  },
  {
    type: "list",
    name: "license",
    message: "Pick a License:",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
       const markdown = generateMarkdown(answers);
       console.log(markdown);
    })
    .catch((error) => {
      console.log("An error occured:", error);
    });
}

// Function call to initialize app
init();
