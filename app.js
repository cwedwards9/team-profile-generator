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
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter your manager's ID:",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter your manager's email address:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter your manager's office number:",
            name: "managerOffice"
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
            name: "internName"
        },
        {
            type: "input",
            message: "Enter your intern's ID:",
            name: "internId"
        },
        {
            type: "input",
            message: "Enter your intern's email address:",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Enter your intern's school name:",
            name: "internSchool"
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
            name: "engineerName"
        },
        {
            type: "input",
            message: "Enter your engineer's ID:",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Enter your engineer's email address:",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Enter your engineer's GitHub username:",
            name: "engineerGithub"
        }
    ]).then(answers => {
        const { engineerName, engineerId, engineerEmail, engineerGithub } = answers;

        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        teamMembers.push(engineer);

        createTeam();
    });
}

function renderTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), (err) =>{
        if(err) throw err;
        console.log("You created your team successfully!");
    });
}


addManager();
