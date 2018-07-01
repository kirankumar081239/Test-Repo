Feature: login 
Scenario Outline: validate the userid field
Given  launch site
When   enter the userid with value "<x>"
Then   check the userid with criteria "<y>" 
And    close site
Examples:
         |      x           |         y        |
         |  Admin           |       valid      |
         |  Adm             |      invalid     |
         |                  |      invalid     |