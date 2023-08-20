# JET

Cypress Page Object Model (POM) with Cucumber
This repository demonstrates how to implement the Page Object Model (POM) design pattern along with Cucumber in Cypress for efficient and organized end-to-end testing. POM improves code maintainability, and Cucumber facilitates collaboration between technical and non-technical team members.

Introduction
This repository provides a practical example of how to structure and organize your Cypress tests using the Page Object Model (POM) design pattern and Cucumber for writing human-readable scenarios. The POM design pattern separates the UI elements and actions into separate classes, making it easier to manage and maintain your test code.

Prerequisites
Node.js and npm installed on your machine.
Familiarity with Cypress and Cucumber.

Installation
Clone this repository:
git clone https://github.com/PoornimaShri1311/JET.git -b MasterGB

Install project dependencies:
npm install

Usage
Define Page Object Model (POM) classes in the cypress/pages/ directory, each representing a page and encapsulating its elements and actions.

Create feature files in the cypress/e2e/features/ directory using Cucumber's Gherkin syntax.

Implement step definitions in the cypress/feature name/ directory to map feature steps to POM methods.

Run the tests using the Cypress test runner.

Project Structure
![image](https://github.com/PoornimaShri1311/JET/assets/90753791/9a273e2e-108b-4b4c-943a-9a46f0f67a34)
cypress-pom-cucumber/
├── cypress/
│   ├── e2e/
|   |   ├── bdd-cucumber
│   │   ├── features/
|   |   |   ├── featurename
│   ├── fixtures/
│   ├── pages/
│   │   ├── careerPage.js
│   │   ├── careerSearchPage.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   ├── plugins/
│   │   ├── index.js
├── cypress.config.js
├── package.json
├── README.md

![image](https://github.com/PoornimaShri1311/JET/assets/90753791/6a8730e7-3c73-410a-a9c5-7af31db28386)

e2e/: Cucumber feature files and step definitions.
pages/: Page Object Model (POM) classes for pages.
support/: Additional support files, including custom commands.
plugins/: Cypress plugins configuration.
cypress.config.js: Cypress configuration file.

Running Tests
Open the Cypress test runner:
npx cypress open --env TAGS="@smoke"
Click on a feature file to execute the scenarios using the Cypress GUI.



