const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe("Initialization", () => {
        it("should create an object with a name, id, email, type and github if provided valid arguments", () => {
            const engineer = new Engineer("Sarah", 3, "sarah@gmail.com", "engineer", "sarah-github");
            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Sarah");
            expect(engineer.ID).toEqual(3);
            expect(engineer.Email).toEqual("sarah@gmail.com");
            expect(engineer.type).toEqual("engineer");
            expect(engineer.GitHub).toEqual("sarah-github");
        });
    });
});