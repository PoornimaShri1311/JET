import careerPage from "../pages/careerPage";
import careerSearchPage from "../pages/careerSearchPage";

// const { expect } = require("chai");
// const { describe } = require("mocha");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Search Job with country", function () {
  it("Search text with Country", function () {
    const cp = new careerPage();
    const csp = new careerSearchPage();
    cy.visit("/");
    cp.keywordTextEntry("Test");
    cp.SearchButtonClick();
    csp.countryLabelSelect();
    csp.countryTextEntry("Netherlands");
    csp.countrySelectFromDD();
    csp.textEntryValidation("Amsterdam, Netherlands");
  });
});

describe("Search Job and Verify count", function () {
  it("Search text and Verify count", function () {
    const cp = new careerPage();
    const csp = new careerSearchPage();
    cy.visit("/");
    cp.keywordClick();
    cp.categoryClick();
    csp.textEntryValidation("Sales");
    csp.countryLabelSelect();
    csp.countryTextEntry("Germany");
    csp.countrySelectFromDD();    
    csp.countResult();
  });
});
