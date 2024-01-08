// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const markdownContent = `
  # Project Title: ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.install}
    
    ## Usage
    ${answers.usage}
    
    ## License
    ${answers.license}
    
    ## Contributing
    ${answers.contribution}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    Contact me at ${answers.email} or visit my GitHub profile at [${answers.user}](https://github.com/${answers.user})
  `
  return markdownContent;
}

module.exports = generateMarkdown;
