import "cypress-real-events/support";

Cypress.Commands.add('accessTestEnvironment', ()=>{
    cy.visit('/', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'Accept-Language': 'pt-BR,pt;q=0.9',
          }
    });
});

Cypress.Commands.add('accessEditSearch', ()=>{
    cy.visit('https://www.skyscanner.com.br/transporte/passagens-aereas/mao/rioa/240920/240926/?adultsv2=1&cabinclass=economy&childrenv2', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
          'Accept-Language': 'pt-BR,pt;q=0.9',
        }
    });
});