describe("Iframes Lesson", () => {
  it("Step 1: Open gooogle.com and search focusservices.com", () => {
    browser.url("https://www.google.com/");
    browser.pause(3000);
    expect(browser).toHaveUrl("https://www.google.com/");
    const search = $("//input[@class='gLFyf gsfi']");
    search.waitForExist(3000);
    search.setValue("Focus Services");
    browser.pause(3000);
    const buttonSearch = $("(//input[@class='gNO89b'])[1]");
    buttonSearch.waitForExist(3000);
    buttonSearch.click();
    browser.pause(3000);
  });
  
  it("Step 2: validating focusservices.com exists in the search page", () => {
    const focusServicesLink=$('(//cite[@class="iUh30 Zu0yb tjvcx"])[1]');
    focusServicesLink.isExisting();
    const focusServicesURL=$('(//h3[@class="LC20lb DKV0Md"])[1]');
    focusServicesURL.click();
    browser.pause(3000);
  });

  it("Step 3: Scrolling into 'Now Hiring' button and checking if it exists then clicking in 'locations' tab ", () => {
    const nowHiringButton=$("//a[@href='https://www.focusservices.com/apply/']");
    nowHiringButton.scrollIntoView();
    browser.pause(3000);
    nowHiringButton.isExisting();
    const locationButton=$("//a[@href='https://www.focusservices.com/locations/']");
    locationButton.scrollIntoView();
    browser.pause(3000);
    locationButton.click();

  });

});
