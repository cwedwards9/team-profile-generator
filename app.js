const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];


// Add prompts to get information about the manager
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your manager's name:",
            name: "managerName",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your manager's ID:",
            name: "managerId",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your manager's email address:",
            name: "managerEmail",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your manager's office number:",
            name: "managerOffice",
            validate: validateInput
        }
    ]).then(answers => {
        // Get the data from the user's input
        const { managerName, managerId, managerEmail, managerOffice } = answers;

        // Create a new Manager instance and add it to the teamMembers array
        const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
        teamMembers.push(manager);

        createTeam();
    });
}

// Add a prompt to see if the user needs to add a new intern/engineer object or if they are done
function createTeam(){
    inquirer.prompt([
        {
            type:"list",
            message: "Add a new team member:",
            name: "newMember",
            choices: ["Intern", "Engineer", "I do not want to add a new team member"]
        }
    ]).then(answer => {
        if(answer.newMember === "Intern"){
            addIntern();
        }
        else if(answer.newMember === "Engineer"){
            addEngineer();
        }
        else {
            renderTeam();
        }
    })
}

// Add prompts to get information about the intern
function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your intern's name:",
            name: "internName",
            validate: validateInput
        },
        {
            type: "number",
            message: "Enter your intern's ID:",
            name: "internId",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your intern's email address:",
            name: "internEmail",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your intern's school name:",
            name: "internSchool",
            validate: validateInput
        }
    ]).then(answers => {
        const { internName, internId, internEmail, internSchool } = answers;

        const intern = new Intern(internName, internId, internEmail, internSchool);
        teamMembers.push(intern);

        createTeam();
    });
}

// Add prompts to get information about the engineer
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your engineer's name:",
            name: "engineerName",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your engineer's ID:",
            name: "engineerId",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your engineer's email address:",
            name: "engineerEmail",
            validate: validateInput
        },
        {
            type: "input",
            message: "Enter your engineer's GitHub username:",
            name: "engineerGithub",
            validate: validateInput
        }
    ]).then(answers => {
        const { engineerName, engineerId, engineerEmail, engineerGithub } = answers;

        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        teamMembers.push(engineer);

        createTeam();
    });
}

// Write to a file (new or existing) called team.html in the output directory with the user's inputs rendered into html
function renderTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), (err) =>{
        if(err) throw err;
        console.log("You created your team successfully!");
    });
}

// Initialize the application, start with getting info on the manager
addManager();

// Validation
function validateInput(input){
    if(!input){
        return "Please enter an input!"
    }
    return true;
}