class careerSearchPage {
  countryLabelSelect() {
    cy.get("#CountryAccordion")

      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
      // cy.screenshot();
  }

  countryTextEntry(countryname) {
    cy.get("#facetInput_1")
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .type(countryname);
      cy.screenshot();
  }

  countrySelectFromDD() {
    cy.xpath(
      "//input[@id='facetInput_1']//following::span[@class='checkbox'][1]"
    )
      .first()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
      cy.screenshot();
  }

  textEntryValidation(countrynameResult) {
    cy.get(":nth-child(1) > .information > .job-info")
      .contains(countrynameResult)
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      });
  }

  countResult() {
    cy.get(".result-count")
      .invoke("text")
      .then((count1) => {
        cy.xpath("//span[@class='result-count']")
          .invoke("text")
          .then((count2) => {
            expect(count1).to.contain(count2);
          });
      });
  }
}
export default careerSearchPage;
