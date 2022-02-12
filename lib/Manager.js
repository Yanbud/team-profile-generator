const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, type, officeNumber) {
        super(name, id, email, type);
        this.OfficeNumber = officeNumber
    }
    getRole() {
        return `👨‍💼 Manager`
    }
}

module.exports = Manager;