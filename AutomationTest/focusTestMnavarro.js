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
    nowHiringButton.scrollIntoView({block: "center", behavior: "smooth"});
    browser.pause(3000);
    nowHiringButton.isExisting();
    const locationButton=$("//a[@href='https://www.focusservices.com/locations/']");
    locationButton.scrollIntoView({block: "center", behavior: "smooth"});
    browser.pause(3000);
    locationButton.click()

  });

  it("Step 4: Looking for North America link and doing an assertion ", () => {
    const northAmericaLink=$('//span[text()="North America"]');
    expect(northAmericaLink).toBeVisible();
    northAmericaLink.scrollIntoView({block: "center", behavior: "smooth"});
    browser.pause(3000);
    const centralAmericaLink=$('//span[text()="Central America"]');
    browser.pause(3000);
    centralAmericaLink.scrollIntoView({block: "center", behavior: "smooth"});
    centralAmericaLink.click()
  });

  it("Steps 5: Validate if El Salvador & Nicaragua Exists and clicking in Asia and verifying a text", () => {
    const elSalvadorandNicaragua=$('(//div[@class="avia_textblock  "])[13]/h2');
    elSalvadorandNicaragua.isDisplayed();
    browser.pause(3000);
    const AsiaLink=$('//span[text()="Asia"]');
    browser.pause(3000);
    AsiaLink.scrollIntoView({block: "center", behavior: "smooth"});
    AsiaLink.click()
    browser.pause(3000);
    const bacolobCity=$('(//div[@class="avia_textblock  "]/h3)[12]');
    bacolobCity.isDisplayed();
    bacolobCity.saveScreenshot('bacolobCity,PhilippinesExist.png'); 

  });

});
