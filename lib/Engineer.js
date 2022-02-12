const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, type, github) {
        super(name, id, email, type);
        this.GitHub = github
    }

    getGithub(data) {
        return `<a href="https://github.com/${data.github}" target="_blank">${data.github}</a>`
    }
    getRole() {
        return `👨‍💻 Engineer`
    }
}
module.exports = Engineer;