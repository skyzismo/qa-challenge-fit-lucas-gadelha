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

1. **Search Flights:** Verify if it is possible to perform the flight search by entering data in the departure and arrival airport fields, round-trip dates, and adding one person, leaving the following options unchecked: add nearby airports, direct flights, and nearby airports.
   
   - FIT-01: Search flights with round-trip dates

2. **Edit Flight Search:** Verify if it is possible to perform the flight search edit by updating the data in the departure and arrival airport fields, round-trip dates, and adding more than one person.

   - FIT-02: Edit Flight Search with valid data
   
3. **Clear Flight Search:** Verify if it is possible to clear the flight search by removing the data in the departure and arrival airport fields and the round-trip dates.
   
   - FIT-03: Clear Flight Search

### Test Results:

1. **Search Flights:** 
   - FIT-01: *Conditional Pass* - It was not possible to pass through the Captcha verification. This website also have a bot checker, and automation is not able to complete this test. But it was also possible to input data and select dates;

2. **Edit Flight Search:**
   - FIT-02: *Failed* - It was not possible to pass through the Captcha verification.
   
3. **Clear Flight Search:**   
   - FIT-03: *Conditional Pass*

### Additional Notes:

For the architecture, the Page Objects design pattern was used to make the test suite cleaner and more readable by separating the functions that capture the elements. IDs identifying each test were used for better case tracking.

More scenarios were mapped, such as searching and editing with flexible dates; however, the main challenge encountered was the website's Captcha blocking. Some websites block automation tools by default, which interfered with the test execution. Additionally, the website's identifiers are dynamic, making element access more difficult.

For future improvements, the ideal solution would be to run the test suite in a controlled test environment with the Captcha function not implemented.

---