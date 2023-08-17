class careerPage {
  keywordTextEntry(Searchtext) {
    cy.get("#keywordSearch")
      .clear()
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .type(Searchtext);
    return this;
  }

  SearchButtonClick() {
    cy.get("#ph-search-backdrop")
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
  }

  keywordClick() {
    cy.get("#keywordSearch")
      .focus()
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
    return this;
  }

  categoryClick() {
    cy.get(".au-target.phs-Sales")
      .then(($button) => {
        $button.css("border", "5px solid magenta");
      })
      .click();
    return this;
  }
}

export default careerPage;
// module.exports = new careerPage();
