Feature: input component

    Scenario: Mount component and interact with it
        Given Mounted input component
        When I type "ABC"
        Then input field has "ABC"