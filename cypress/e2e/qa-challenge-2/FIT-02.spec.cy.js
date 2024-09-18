import { editSearch } from "./editSearch.po";

describe('FIT-02: Edit Flight Search with valid data', ()=>{

    const editSearchPO = new editSearch();

    before(()=>{
        cy.accessEditSearch();
    })

    it('Validate if its possible to edit a search flight with round-trip dates', () => {

        editSearchPO.getSearchBox().contains('Manaus (MAO) - Rio de Janeiro (qualquer)').click();
        editSearchPO.getArrivalDestination().click();
        editSearchPO.getArrivalDestination().type('Cuiaba');

        editSearchPO.getSearchButton().click();
    });

})