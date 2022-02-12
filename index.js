const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const page = require('./src/page-template');
let staff = []
const welcome = () => console.log(`Welcome to the team generator!`)

function getManager() {
    inquirer.prompt([{
                type: `input`,
                name: `name`,
                message: `What is the team manager's name?`,
            },
            {
                type: `input`,
                name: `id`,
                message: `What is the team manager's id?`
            },
            {
                type: `input`,
                name: `email`,
                message: `What is the team manager's email?`
            },
            {
                type: `input`,
                name: `officeNumber`,
                message: `What is the team manager's office number?`
            }

        ])
        .then((data) => {
            var manager = new Manager();
            let name = manager.getName(data);
            let id = manager.getId(data);
            let role = manager.getRole();
            let email = manager.getEmail(data);
            var manager = new Manager(name, id, email, role, data.officeNumber)
            staff.push(manager);
        })
        .then(addOne);

}

function addOne() {
    inquirer.prompt([{
                type: `list`,
                name: `type`,
                message: `Which type of team member would you like to add?`,
                choices: [`Engineer`, `Intern`, `I don't want to add any more team members`]
            }

        ])
        .then((data) => typeCheck(data));
}

function getEngineer(data) {
    inquirer.prompt([{
                type: `input`,
                name: `name`,
                message: `What is your engineer's name?`
            },
            {
                type: `input`,
                name: `id`,
                message: `What is your engineer's id?`
            },
            {
                type: `input`,
                name: `email`,
                message: `What is your engineer's email?`
            },
            {
                type: `input`,
                name: `github`,
                message: `What is your engineer's GitHub username?`
            },

        ]).then((data) => {
            var engineer = new Engineer();
            let name = engineer.getName(data);
            let id = engineer.getId(data);
            let role = engineer.getRole();
            let github = engineer.getGithub(data);
            let email = engineer.getEmail(data);
            var engineer = new Engineer(name, id, email, role, github)
            staff.push(engineer);
        })
        .then(addOne);
}

function getIntern() {
    inquirer.prompt([{
                type: `input`,
                name: `name`,
                message: `What is your intern's name?`
            },
            {
                type: `input`,
                name: `id`,
                message: `What is your intern's id?`
            },
            {
                type: `input`,
                name: `email`,
                message: `What is your intern's email?`
            },
            {
                type: `input`,
                name: `school`,
                message: `What is your intern's school?`
            },

        ]).then((data) => {
            var intern = new Intern();
            let name = intern.getName(data);
            let id = intern.getId(data);
            let role = intern.getRole();
            let school = intern.getSchool(data);
            let email = intern.getEmail(data);
            var intern = new Intern(name, id, email, role, school)
            staff.push(intern);
        })
        .then(addOne);
}

function typeCheck(data) {
    switch (data.type) {
        case `Engineer`:
            getEngineer();
            break;
        case `Intern`:
            getIntern();
            break;
        default:
            team(staff);
    }


}

function team(staff) {
    const filename = `./dist/team.html`;
    fs.writeFileSync(filename, page(staff))
}
const init = () => {
    welcome();
    getManager();
}

init()