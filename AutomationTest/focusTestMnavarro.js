describe("Iframes Lesson", () => {
  it("Open gooogle.com and search focusservices.com", () => {
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
});
