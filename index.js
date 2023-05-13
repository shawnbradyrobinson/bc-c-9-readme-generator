// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
/*
    {
        type: "input",
        title: "title",
        message: "what is your project's name?",
    },
    {
        type: "input",
        name: "name",
        message: "what is your name?",
    },





*/
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
/*
const readme_File = data; 

fs.writeFile(fileName, readme_File,(err) => err ? console.log(err) : console.log("Successfully created README.md!");

*/


}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();

const generateREADME = ({name, username, description}) => 
`
# ${name}

## ${username}

## **Description**
${description}


`;

inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your project's title?",
    },
    
    {
        type: "input",
        message: "What is your name?",
        name: "username",
    },

    {
        type: "input",
        message: "Please add a description for your project",
        name: "description",
    },
])
.then((data) => {
    const readmePageContent = generateREADME(data);
    fs.writeFile("readme.md", readmePageContent, (err) => err ? console.log(err) : console.log("success!"));
});