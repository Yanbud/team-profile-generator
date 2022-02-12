const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
        it("should create an object with a name, id, email, type and school if provided valid arguments", () => {
            const manager = new Manager("Sarah", 3, "sarah@gmail.com", "manager", 6696);
            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Sarah");
            expect(manager.ID).toEqual(3);
            expect(manager.Email).toEqual("sarah@gmail.com");
            expect(manager.type).toEqual("manager");
            expect(manager.OfficeNumber).toEqual(6696);
        });
    });
});