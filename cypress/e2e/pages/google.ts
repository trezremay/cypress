class google{

    textXpath = '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input';
    url = 'http://www.google.com';
    searchTxt = 'cypress';
    resultId = 'rcnt';

    visit(){
        cy.visit(this.url)
    }

    getSearchBar(){
        return cy.get(this.textXpath);
    }

    search(){
        this.getSearchBar();
        cy.type(this.searchTxt)
        cy.type('Cypress.io{enter}')

    }

    getResults(){
        return cy.get(this.resultId)
                    .should('be.visible');
    }

    searchForResult(){
        this.search();
        this.getResults();

    }




}

export default google;