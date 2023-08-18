class careerPage {
  keywordTextEntry(Searchtext) {
    cy.get("#keywordSearch")
      .clear()
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .type(Searchtext);
      cy.screenshot();
    return this;
  }

  SearchButtonClick() {
    cy.get("#ph-search-backdrop")
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
      // cy.screenshot();
  }

  keywordClick() {
    cy.get("#keywordSearch")
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
      // cy.screenshot();
    return this;
  }

  categoryClick() {
    cy.get(".au-target.phs-Sales")
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
      // cy.screenshot();
    return this;
  }
}

export default careerPage;
// module.exports = new careerPage();
