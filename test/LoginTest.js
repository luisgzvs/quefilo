
Feature('LoginTest');

Before((I, navSectionPage) => {
    I.amOnPage('/')
    navSectionPage.waitForButtonVisibility()
})

Scenario('Login with fake credentials', (I, navSectionPage, loginPage) => {
    navSectionPage.gotoLogin()
    loginPage.loginWithFakeCredentials()
});

