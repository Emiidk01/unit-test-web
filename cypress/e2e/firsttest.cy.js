// <reference types="cypress"/>

describe("First Test", () => {
    it("should find componets." ,() => {
        cy.visit("http://localhost:3000/todo");
        // by Tag name
        cy.get("input");

        // Write 
        cy.get("input").type("Hello world");

        // Assert
        cy.get("input").first().should("have.value", "Hello world")

    });
});
