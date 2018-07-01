$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("title.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "validate the page title",
  "description": "",
  "id": "login;validate-the-page-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Check the the title actual to expected",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Site should be dispaly the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("userid.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the userid with value \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "check the userid with criteria \"valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the userid with value \"Adm\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "check the userid with criteria \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the userid with value \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "check the userid with criteria \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});