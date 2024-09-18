export class search{

    getDepartureLocationInput(){
        return cy.get('#originInput-input');
    }

    getArrivalLocationInput(){
        return cy.get('#destinationInput-input');
    }

    getDepartureDate(){
        return cy.get('ul#originInput-menu li').first()
    }

    getArrivalDate(){
        return cy.get('ul#destinationInput-menu li').first()
    }

    getOriginNearbyAirports(){
        return cy.get('input[name="origin-nearby-airports"]').should('not.be.checked');
    }

    getDestinationNearbyAirports(){
        return cy.get('input[name="destination-nearby-airports"]').should('not.be.checked')
    }

    getDirectFlights(){
        return cy.get('input[name="prefer-directs"]').should('not.be.checked')
    }
}