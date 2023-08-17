Feature:JETA

@smoke
  Scenario: Search Job in Career Page with keyword and country

    Given I navigate to JETA Career website
    When User enters "Test" in Keyword field
    And user clicks on Search Button
    Then User clicks on Country Button
    When User enters "Netherlands" in country Field
    And User Selects the country from the dropdown
    Then User validates the results with "Amsterdam, Netherlands"
    
@smoke
Scenario: Search Job in Career Page and validate the Result count

    Given I navigate to JETA Career website
    Then user clicks on Keyword field
    And User Selects sales from the dropdown
    Then User validates the results with "Sales"
    And User reads and validates the result count
    Then User clicks on Country Button
    When User enters "Germany" in country Field
    And User Selects the country from the dropdown
    Then User validates the results with "Munich, Germany"
    And User reads and validates the result count



