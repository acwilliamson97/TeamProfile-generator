const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employee = [];

promptManager();
function promptManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of your manager?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is your manager's ID number?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "managerOffice"
            }
        ])
        .then(answer => {
            const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice)
            company.push(newManager)
            employeeType();
        })
}

function addEmployee(job) {
    if (job === "Engineer") {
        addEngineer()
    } else if (job === "Intern") {
        addIntern()
    } else {
        writeFile();
    }
}

function addEngineer() {
    inquirer
        .prompt([
            {
                message: `What is the name of your engineer?`,
                name: `name`
            },
            {
                message: `What is your engineer's ID number?`,
                name: `id`
            },
            {
                message: `What is your engineer's email?`,
                name: `email`
            },
            {
                message: `What is your engineer's GitHub username?`,
                name: `github`
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            company.push(engineer);
            employeeType()
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                message: `What is the name of your intern?`,
                name: `name`
            },
            {
                message: `What is your intern's ID number?`,
                name: `id`
            },
            {
                message: `What is your intern's email?`,
                name: `email`
            },
            {
                message: `What school does your intern currently attend or graduate from?`,
                name: `school`
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            company.push(intern);
            employeeType()
        })
}

function employeeType() {
    inquirer
        .prompt(
            [{
                type: "list",
                message: "What kind of Employee would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members."],
                name: "type"
            }],
        )
        .then(answers => {
            createEmployee(answers.type);
        })
}

function writeFile() {
    fs.writeFile(outputPath, render(company), err => {
        if (err) {
            console.log(err);
        }
        console.log("Done writing file: " + outputPath);
    });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
