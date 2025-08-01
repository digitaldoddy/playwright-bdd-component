// Generated from: features/input.feature
import { test } from "../../features/fixtures.js";

test.describe('input component', () => {

  test('Mount component and interact with it', async ({ Given, mount, When, page, Then }) => { 
    await Given('Mounted input component', null, { mount }); 
    await When('I type "ABC"', null, { page }); 
    await Then('input field has "ABC"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features/input.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Mounted input component","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I type \"ABC\"","stepMatchArguments":[{"group":{"start":7,"value":"\"ABC\"","children":[{"start":8,"value":"ABC","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then input field has \"ABC\"","stepMatchArguments":[{"group":{"start":16,"value":"\"ABC\"","children":[{"start":17,"value":"ABC","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end