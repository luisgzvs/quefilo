Feature('RegisterTest');

Before((I, navSectionPage, registerPage, loginPage) => {
    navSectionPage.gotoLogin()
    loginPage.gotoRegister()
    registerPage.waitFortitleVisibility()
})

Scenario('Register a user', (I, registerPage) => {
    registerPage.register()
});

