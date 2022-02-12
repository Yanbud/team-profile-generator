const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, type, school) {
        super(name, id, email, type);
        this.School = school
    }
    getSchool(data) {
        return `${data.school}`
    }
    getRole() {
        return `👨‍🎓 Intern`
    }

}
module.exports = Intern;