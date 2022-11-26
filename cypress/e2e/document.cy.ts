describe("test document", () => {
    // login before testing docs
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get("input").first().type("test@test.com");
        cy.get("input").last().type("test123");
        cy.get("button").first().click();
    })

    describe("test document creation", () => {
        afterEach(() => {
             //testing deleting + clearing after creating
             cy.get('ul').contains('new doc :)').click();
             cy.get('.gbNszU').click();
             cy.get('.sc-gicCDI > :nth-child(2)').click();
        })
        it("should create new document", () => {
            cy.get('.sc-dIouRR').click();
            cy.get('.sc-fEOsli > :nth-child(1) > .sc-bczRLJ').click();
            cy.get('input').type("new doc :)");
            cy.get('.brkZzk').click();
            cy.get('ul').should('contain.text', 'new doc :)')
        })
    
      
    })
    describe("test changing doc name", () => {
        it("should change document name", () => {
            cy.get('.sc-dIouRR').click();
            cy.get('#U4zwmYFd1846nvczl4b3').click();
            cy.get('.sc-dmRaPn').click();
            const randomString = String((Math.random() * 5).toFixed(5))
            cy.get('input').type(randomString)
            cy.get('.jkLftT').click()
            cy.get('.sc-hAZoDl > :nth-child(1)').should('contain', randomString)
        })
    })
    describe("handling error state while creating doc/changing doc name", () => {
        it("should not be able to create new document with incorrect title", () => {
            cy.get('.sc-dIouRR').click();
            cy.get('.sc-fEOsli > :nth-child(1) > .sc-bczRLJ').click();
            cy.get('input').type("tooooooooooooooo long title :D");
            cy.get('.brkZzk').click();
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(`Document name can't exceed 15 characters. Try another name`);
             })
        })
        it("should not change document name when title is too long", () => {
            cy.get('.sc-dIouRR').click();
            cy.get('#U4zwmYFd1846nvczl4b3').click();
            cy.get('.sc-dmRaPn').click();
            cy.get('input').type("tooooooooooooooo long title :D");
            cy.get('.jkLftT')
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(`Document name can't exceed 15 characters. Try another name`);
             })
        })
    })

    describe("test markdown input and preview", () => {
        it("should accept input and show converted text in preview tab", () => {
            cy.get('.sc-dIouRR').click();
            cy.get('#U4zwmYFd1846nvczl4b3').click();
            cy.get('.sc-dIouRR').click();
            cy.get('.sc-iBkjds').type("# Markdown Test");
            cy.get('.sc-jqUVSM').should('contain', "Markdown Test")
        })
    })
})