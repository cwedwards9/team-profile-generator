# Team Profile Generator
[![License](https://img.shields.io/badge/license-The%20MIT%20License-success.svg)](https://shields.io/)


## Description
A command line application that generates a roster of all team member's and their information based on their role.

The application creates a roster for a software engineering team that includes the manager of the team and any interns and engineers on the team. The information each member gets includes name, id, and email. Then based on the role they get specific information added. The manager gets office number, the interns get their school added, and the engineers get their github username added.

Once all members are added, the user should select 'Finish and create team' to complete the prompts and render the information as html which is then written in a new file called `team.html`.


## Installation
Make sure that your have Node.js installed.
* Go to the [Node.js](https://nodejs.org/en) site.
* Under "Download for Windows", click the green box with the LTS version of Node to download the installer.
* Install Inquirer & Jest (for testing): `npm i`


## Usage
* Run the command: `node app`
* Answer the prompts
* Open the `team.html` file that will be generated under the output directory to view the rendered web page with the team members and their information

Click [HERE](https://drive.google.com/file/d/1sj_sTzhZt-ZNMQ3Pkp-RjZZ0Y9_UCwTz/view) to watch a video demo


## Technologies
* Node.js
* [Inquirer](https://www.npmjs.com/package/inquirer)


## Tests
Unit tests are written in [Jest](https://jestjs.io/).


## License
Copyright (c) 2020 Chase Edwards   
License Under the [MIT License](LICENSE)