'use strict';
var faker = require('faker');

let I, basePage

module.exports = {

  _init() {
    I = require('../steps_file.js')()
    basePage = require('../base/BasePage')
  },

  // insert your locators and methods here
  elements: {
    loginLink: "//li[@class='loginUser']",
    registerLink: "//*[@class='register']//a[1]",
    loginButton: "//div[@class='row login']//input",
    userNameInput: '#username',
    userPassword: '#password',
  },

  waitForButtonVisibility() {
    basePage.waitForElementVisibility(this.elements.loginLink)
  },

  loginWithFakeCredentials(){
    var randomEmail = faker.internet.email()
    var randomPass = faker.internet.password()
    I.fillField(this.elements.userNameInput, randomEmail)
    I.fillField(this.elements.userPassword, randomPass)
    I.click(this.elements.loginButton)
    //I.see('Usuario o contraseña inválidos')
  },

  gotoRegister(){
    I.click(this.elements.registerLink)
  }

}