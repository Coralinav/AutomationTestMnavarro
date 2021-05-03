const pageObject = require("./PageObjectModels/PageObject");
const focusTest = require("./PageObjectModels/FocusTestMnavarroObjectModels");

describe("Focus Test Mnavarro script", () => {
  it("Step 1: Open gooogle.com and search focusservices.com", () => {
    pageObject.openUrl("https://www.google.com/");
    pageObject.validateUrl("https://www.google.com/");
    pageObject.pauseBrowser(3000);
    focusTest.searchLink("Focus Services");
  });

  it("Step 2: validating focusservices.com exists in the search page", () => {
    focusTest.checkUrl();
    pageObject.pauseBrowser(3000);
  });

  it("Step 3: Scrolling into 'Now Hiring' button and checking if it exists then clicking in 'locations' tab ", () => {
    focusTest.scrolling();
    pageObject.pauseBrowser(3000);
  });

  it("Step 4: Looking for North America link and doing an assertion ", () => {
    focusTest.looking();
    pageObject.pauseBrowser(3000);
  });

  it("Steps 5: Validate if El Salvador & Nicaragua Exists and clicking in Asia and verifying a text", () => {
    focusTest.validate();
    pageObject.takeScreenshot("bacolobCity,PhilippinesExist.png", focusTest.bacolobCity);
  });
});
