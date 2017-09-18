
Feature('LoginTest');

Before((I, navSectionPage) => {
    I.amOnPage('/')
    dashboardPage.waitForClearButtonVisibility()
})

Scenario('Login Test', (I, navSectionPage) => {
    navSectionPage.gotoLogin()
});
