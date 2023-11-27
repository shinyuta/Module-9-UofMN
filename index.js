
// imports/require.
const fs = require("fs"); 
const inquirer = require("inquirer"); 
const generateMarkdown = require("./utils/generateMarkdown"); 

// Using inquirer .prompt => .then (https://stackoverflow.com/questions/73603668/how-do-i-format-data-from-an-inquirer-output-into-markdown-file)
inquirer
// list of questions:
// name
// username
// email
// title
// description
// installation
// usage
// contribution
// tests
// license.
  .prompt([
    {
      type: "input",
      name: "name",
      message:
        "Welcome to this professional README generator! This will go through all the necessary prompts in order to generate a professional README markdown file. First, please enter your name.",
      validate: (inputName) => {
        //added validate to all questions so there are values for each question
        return inputName ? true : console.log("Please enter your name.");
        false;
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
      validate: (inputGithub) => {
        return inputGithub
          ? true
          : console.log("Please enter your github username.");
        false;
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (inputEmail) => {
        return inputEmail
          ? true
          : console.log("Please enter your email for your README.");
        false;
      },
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of this project?",
      validate: (inputTitle) => {
        return inputTitle
          ? true
          : console.log("Your project must have a title.");
        false;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Can you describe your project?",
      validate: (inputDescription) => {
        return inputDescription
          ? true
          : console.log("Please enter a description of your project.");
        false;
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Is there any special installation for this project?",
      validate: (inputInstallation) => {
        return inputInstallation
          ? true
          : console.log(
              "Please enter your installation steps to run this project."
            );
        false;
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How is this project supposed to be used?",
      validate: (inputUsage) => {
        return inputUsage
          ? true
          : console.log(
              "Please enter how your application is supposed to be used."
            );
        false;
      },
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Who contributed to this projects code? Please input their username/name and contributions.",
      validate: (inputContribution) => {
        return inputContribution
          ? true
          : console.log(
              'Who contributed to this projects code? Please input their username/name and contributions.'
            );
        false;
      },
    },
    {
      type: "input",
      name: "tests",
      message: "What tests were conducted in this project?",
      validate: (inputTests) => {
        return inputTests
          ? true
          : console.log("Please list tests you used to build this project.");
        false;
      },
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to add to your project?",
      choices: ["MIT", "CC--0", "GPL", "No License"],
    },
  ])
  .then((answer) => {
    // write to file method (https://www.geeksforgeeks.org/node-js-fs-writefile-method/)
    const markdownContent = generateMarkdown(answer);
    fs.writeFile(`${answer.projectTitle}.md`, markdownContent, (err) => {
      err ? console.log(err) : console.log("Successfully Built README");
    });
  });