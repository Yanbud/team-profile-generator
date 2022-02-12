const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
        it("should create an object with a name, id, email, type and school if provided valid arguments", () => {
            const intern = new Intern("Sarah", 3, "sarah@gmail.com", "intern", "sarah-school");
            // Verify that the new object has the correct properties
            expect(intern.name).toEqual("Sarah");
            expect(intern.ID).toEqual(3);
            expect(intern.Email).toEqual("sarah@gmail.com");
            expect(intern.type).toEqual("intern");
            expect(intern.School).toEqual("sarah-school");
        });
    });
});