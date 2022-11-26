describe("test auth", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it("should pass wrong credentials and not login", () => {
        cy.get("input").first().type("user@user.com");
        cy.get("input").last().type("haslo");
        cy.get("button").first().click();
        cy.url().should('equal', 'http://localhost:3000/login')
    })

    it("should pass correct credentials and move to home", () => {
        cy.get("input").first().type("test@test.com");
        cy.get("input").last().type("test123");
        cy.get("button").first().click();
        cy.url().should('equal', 'http://localhost:3000/');
    })
})


