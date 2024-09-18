export class editSearch{
    getSearchBox(){
        return cy.get('section[role="searchbox"]').find('nav').find('button');
    }

    getArrivalDestination(){
        return cy.get('div#fsc-origin-search-location-selector');
    }

    editArrialDestination(){
        return cy.get('input#fsc-origin-search')
    }

    selectArrivalDestination(){
        return cy.get('input[aria-activedescendant="react-autowhatever-fsc-origin-search--item-0"]').click();
    }

    getSearchButton(){
        return cy.get('button[aria-label="Buscar"]');
    }
}