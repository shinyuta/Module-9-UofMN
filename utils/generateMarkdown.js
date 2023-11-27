const fs = require("fs");

function renderLicenseBadge(license) {
  return license === "No License"
    ? ""
    : `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://mit-license.org/`;
    case "GPL":
      return `https://www.gnu.org/licenses/gpl-3.0.en.html#license-text`;
    case "CC--0":
      return `https://creativecommons.org/licenses/by-nd/4.0`;
    default:
      return ""; 
  }
}

function renderLicenseSection(license) {
  return license === "No License"
    ? ``
    : `
  This project is using the ${license} license. To learn more, please click the license link listed above.`;
}

// uses the data passed in and the names assigned (for example data.projectTitle = the project title that was input).
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description) 
  - [Installation](#Installation) 
  - [Usage](#usage) 
  - [Contribution](#contribution) 
  - [Tests](#tests) 
  - [Questions](#questions) 
  - [Credits](#credits) 

  ## Description 
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licenses 
  ${renderLicenseSection(data.license)}

  ## Contribution 
  ${data.contribution}

  ## Tests 
  ${data.tests}

  ## Questions 
  Have any questions regarding this project? 
  Send me a message on... 
  Github: https://github.com/${data.username} 
  Email: ${data.email} 

  ## Credits 
  ${data.name}
`;
}

module.exports = generateMarkdown;