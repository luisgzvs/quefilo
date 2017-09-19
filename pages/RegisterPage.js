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
    pageTitle: '.box_name',
    registerButton: {xpath: "//*[@value='Registrarse']"},
    firstNameField: {xpath: "//*[@name='first_name']"},
    lastNameField: {xpath: "//*[@name='last_name']"},
    addressField: {xpath: "//*[@name='name_address']"},
    addressExact: {xpath: "//*[@name='address']"},
    phone: {xpath: "//*[@name='phone']"},
    mobile: {xpath: "//*[@name='movil']"},
    userPass: {xpath: "//*[@name='password']"},
    userPassConfirm: {xpath: "//*[@name='password_confirm']"},
  },

  waitFortitleVisibility() {
    basePage.waitForElementVisibility(this.elements.pageTitle)
  },

  register(){
      console.log('good')
  }

}