import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import careerPage from "../../../../pages/careerPage.js";
import careerSearchPage from "../../../../pages/careerSearchPage.js";

const cp = new careerPage();
const csp = new careerSearchPage();

Given("I navigate to JETA Career website", function () {
  cy.visit("/");
});

When("User enters Text in Keyword field", function () {
  cp.keywordTextEntry("Test");
});

Then("user clicks on Search Button", function () {
  cp.SearchButtonClick();
});

Then("User clicks on Country Button", function () {
  csp.countryLabelSelect();
});

When("User enters Text in country Field", function () {
  csp.countryTextEntry("Netherlands");
});

Then("User Selects the country from the dropdown", function () {
  csp.countrySelectFromDD();
});

Then("User validates the results with Text", function () {
  csp.textEntryValidation("Amsterdam, Netherlands");
});

Then("User reads and validates the result count", function () {
  csp.countResult();
});

Then("user clicks on Keyword field", () => {
  cp.keywordClick();
});

When("User enters {string} in Keyword field", function (Category) {
  cp.keywordTextEntry(Category);
});

When("User enters {string} in country Field", function (Category) {
  csp.countryTextEntry(Category);
});

Then("User Selects sales from the dropdown", function () {
  cp.categoryClick();
});

Then("User validates the results with {string}", function (ResultValidation) {
  csp.textEntryValidation(ResultValidation);
});
