
const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');

const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Your GitHub username:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Your email address:',
    },
    {
        name: 'title',
        type: 'input',
        message: 'Your project name:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Tell us a bit about your project'
    },
    {
        name: 'install',
        type: 'input',
        message: 'What command should be ran to install?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How does the user use this repo?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What command should be used to run tests?',
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'How can the user contribute to the repo?',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license should this project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const readMeContent = generate(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>
    writeToFile(answers));
}

// Function call to initialize app
init();
