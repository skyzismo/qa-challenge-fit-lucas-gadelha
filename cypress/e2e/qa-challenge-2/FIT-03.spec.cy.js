import { clearSearch } from "./clearSearch.po";

describe('FIT-03: Clear Flight Search', ()=>{

    const clearSearchPO = new clearSearch();

    before(()=>{
        cy.accessTestEnvironment();
    })

    it('Validate if its possible to edit a search flight with round-trip dates', () => {
        clearSearchPO.getSearchBox().contains('Manaus (MAO) - Rio de Janeiro (qualquer)').click();
        clearSearchPO.getClearOrigin();
        clearSearchPO.getClearDestination();
    });

})