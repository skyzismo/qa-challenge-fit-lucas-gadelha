## Automated Test Documentation 

### General Information:

- **Project Name:** QA Challenge FIT
- **Test Date:** 09/18/2024
- **Test Responsible:** Lucas Vinícius Gonçalves Gadelha
- **Test Objective:** Automate basic flows for "Search Flights," "Edit Flight Search," and "Clear Flight Search," using the following website as the test environment: **Skyscanner**.

### Test Setup:

- **Operating System Version:** Windows 11 Pro
- **Browser version:** Chrome 129.0.6668.59 Version
- **Tools and Languages**: VS Code, Git Bash, Git/Git Hub, Cypress XX.XXX.XX Version and TypeScript
- **Test environment**: https://www.skyscanner.com.br/

### Tested Functionalities:

1. **Search Flights:**
   - FIT-01: Verify if it is possible to perform the flight search by entering data in the departure and arrival airport fields, **flexible dates**, and adding one person, leaving the following options unchecked: add nearby airports, direct flights, and nearby airports.
   - FIT-02: Verify if it is possible to perform the flight search by entering data in the departure and arrival airport fields, **round-trip dates**, and adding one person, leaving the following options unchecked: add nearby airports, direct flights, and nearby airports.

2. **Edit Flight Search:**
   - FIT-03: Verify if it is possible to perform the flight search edit by updating the data in the departure and arrival airport fields, round-trip dates, and adding more than one person.
   
3. **Clear Flight Search:**
   - FIT-04: Verify if it is possible to clear the flight search by removing the data in the departure and arrival airport fields and the round-trip dates.

### Test Results:

1. **Search Flights:** 
   - FIT-01: *PASSED*

2. **Edit Flight Search:**
   - FIT-02: *PASSED*
   
3. **Clear Flight Search:**   
   - FIT-03: *PASSED*

### Additional Notes:

- [ ] **TODO:** Citar a respeito do uso de Design Pattern Page Objects
- [ ] **TODO:** Criação de IDs para os casos de teste
- [ ] **TODO:** Adição de fluxos alternatios

---