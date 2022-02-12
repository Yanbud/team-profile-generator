const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with a name, id, email, type if provided valid arguments", () => {
            const employee = new Employee("Sarah", 3, "sarah@gmail.com", "employee");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Sarah");
            expect(employee.ID).toEqual(3);
            expect(employee.Email).toEqual("sarah@gmail.com");
            expect(employee.type).toEqual("employee");
        });


    });
});