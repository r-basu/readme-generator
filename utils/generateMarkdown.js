// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return ``
  }
  const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT License': `https://spdx.org/licenses/MIT.html`,
    'GNU GPLv3 License': `https://spdx.org/licenses/GPL-3.0-or-later.html`,
    'Mozilla Public License 2.0': `https://spdx.org/licenses/MPL-2.0.html`,
    'Apache License 2.0': `https://spdx.org/licenses/Apache-2.0.html`
  }
  if (license === 'No License') {
    return ``
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ``;

  const licenseBadge = renderLicenseBadge(license)
  const licenseLink = renderLicenseLink(license)
  licenseSection += `${licenseBadge}\n\n`

  licenseSection += ` This application is covered under [${license}](${licenseLink}).`

  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license)
  const licenseSection = renderLicenseSection(answers.license)
  const markdownContent = `
  # ${answers.title}
  ${licenseBadge}
    
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
  ## Installation
  ${answers.install}
    
  ## Usage
  ${answers.usage}
    
  ## License
  ${licenseSection}
    
  ## Contributing
  ${answers.contribution}
    
  ## Tests
  ${answers.test}
    
  ## Questions
  Contact me at ${answers.email} or visit my GitHub profile at [${answers.user}](https://github.com/${answers.user}) for any additional questions!
  `
  return markdownContent;
}

module.exports = generateMarkdown;
