export class clearSearch{
    getSearchBox(){
        return cy.get('section[role="searchbox"]').find('nav').find('button');
    }

    getClearOrigin(){
        return cy.get('#fsc-origin-search').clear();
    }

    getClearDestination(){
        return cy.get('#fsc-destination-search').clear();
    }
}