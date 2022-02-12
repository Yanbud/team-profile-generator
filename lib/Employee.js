class Employee {
    constructor(name, id, email, type) {
        this.name = name,
            this.ID = id,
            this.Email = email,
            this.type = type
    }

    getName(data) {
        return `${data.name}`
    }
    getId(data) {
        return `${data.id}`
    }
    getEmail(data) {
        return `<a href="mailto:${data.email}">${data.email}</a>`
    }
    getRole() {
        return `Employee`
    }

}
module.exports = Employee;