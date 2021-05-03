//ES5
const pageObject={
    openUrl: function(url){
        browser.url(url);
    },

    validateUrl: function(url){
        expect(browser).toHaveUrl(url);
    },

    takeScreenshot: function(screenShotName, selector){
        selector.saveScreenshot(screenShotName); 
    },

    pauseBrowser: function(time){
        browser.pause(time);
    },
}

module.exports = pageObject;