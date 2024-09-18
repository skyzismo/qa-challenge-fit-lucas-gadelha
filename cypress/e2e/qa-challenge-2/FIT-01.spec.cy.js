import { search } from "./search.po";

describe('FIT-01: Search flights with round-trip dates', ()=>{

    const searchPO = new search();

    before(()=>{
        cy.accessTestEnvironment();
    })

    it('Validate if its possible to edit a search flight with round-trip dates', () => {

        searchPO.getDepartureLocationInput().type('Palermo');
        searchPO.getDepartureDate().click();
        searchPO.getArrivalLocationInput().type('Manaus');
        searchPO.getArrivalDate().click();

        searchPO.getOriginNearbyAirports();
        searchPO.getDestinationNearbyAirports();
        searchPO.getDirectFlights();
    });

})