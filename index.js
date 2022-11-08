// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    name: "title",
    message: "What is the title of your project?"   

},
{
    type: "input",
    name: "description",
    message: "Can you give a description of your project?"


},
{
    type: "input",
    name: "installation",
    message: "Can you give installation instructions about your project?"

},
{
    type: "input",
    name: "usage",
    message: "Can you give usage information about your project?"

},
{
    type: "input",
    name: "contribution",
    message: "Can you give contribution guidelines about your project?"

},
{
    type: "input",
    name: "tests",
    message: "Can you give test instructions about your project?"

},
{
    type: "list",
    name: "license",
    message: "Select your license",
    choices: ["apache", "MIT", "gnu", "isc", "mozilla", "open"]

},
{
    type: "input",
    name: "username",
    message: "What's your github username?",
    

},
{
    type: "input",
    name: "email",
    message: "What's your email address?",
    

}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile (fileName, data, function(){
        console.log("Read me is generated")
    })


    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {


        let template = generateMarkdown(answers)
        

       writeToFile("README.md", template)





    
    }) 

       
    
}

// Function call to initialize app
init();
