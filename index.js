// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

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
      "No License",
      "GNU GPLv3 License",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(directory, fileName, data) {
  const filePath = path.join(directory, fileName);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("An error occured while writing the file:", err);
    } else {
      console.log(`${filePath} file has been created`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      const fileName = 'README.md'
      const directoryPath = './output/'
      writeToFile(directoryPath, fileName, markdown);
    })
    .catch((error) => {
      console.log("An error occured:", error);
    });
}

// Function call to initialize app
init();
