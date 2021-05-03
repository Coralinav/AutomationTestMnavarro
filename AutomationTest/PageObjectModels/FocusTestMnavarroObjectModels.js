//ES5

const focusTest = {
    

  get search() {
    return $("//input[@class='gLFyf gsfi']");
  },
  get focusServicesLink() {
    return $('(//cite[@class="iUh30 Zu0yb tjvcx"])[1]');
  },

  get focusServicesUrl() {
    return $('(//h3[@class="LC20lb DKV0Md"])[1]');
  },


  get buttonSearch(){
      return $("(//input[@class='gNO89b'])[1]");
  },

  get nowHiringButton() {
    return $("//a[@href='https://www.focusservices.com/apply/']");
  },

  get locationButton() {
    return $("//a[@href='https://www.focusservices.com/locations/']");
  },

  get northAmericaLink() {
    return $('//span[text()="North America"]');
  },

  get centralAmericaLink() {
    return $('//span[text()="Central America"]');
  },

  get elSalvadorandNicaragua() {
    return $('(//div[@class="avia_textblock  "])[13]/h2');
  },

  get AsiaLink() {
    return $('//span[text()="Asia"]');
  },

  get bacolobCity() {
    return $('(//div[@class="avia_textblock  "]/h3)[12]');
  },

  searchLink: function (term) {
    this.search.waitForExist(3000);
    this.search.setValue(term);
    browser.pause(3000);
    this.buttonSearch.waitForExist(3000);
    this.buttonSearch.click();
    
  },

    checkUrl: function(){
        this.focusServicesLink.isExisting();
        this.focusServicesUrl.click();
    },

    scrolling: function(){
        this.nowHiringButton.scrollIntoView({block: "center", behavior: "smooth"});
        browser.pause(3000);
        this.nowHiringButton.isExisting();
        this.locationButton.scrollIntoView({block: "center", behavior: "smooth"});
        this.locationButton.click();
    },

    looking: function(){
        expect(this.northAmericaLink).toBeVisible();
        this.northAmericaLink.scrollIntoView({block: "center", behavior: "smooth"});
        browser.pause(3000);
        this.centralAmericaLink.scrollIntoView({block: "center", behavior: "smooth"});
        this.centralAmericaLink.click();

    },

    validate: function(){
        this.elSalvadorandNicaragua.isDisplayed();
        browser.pause(3000);
        this.AsiaLink.scrollIntoView({block: "center", behavior: "smooth"});
        this.AsiaLink.click();
        browser.pause(3000);
        this.bacolobCity.isDisplayed();
    }

};

module.exports = focusTest;
