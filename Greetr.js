/*!
 * Greetr JavaScript Library v1.0

 * Released under the MIT license

 * Date: 2018-03-09
 */


(function (global, $) {

  // 'new' an object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  // hidden within the scope of IIFI and never directly accessible
  var supportedLangs = ['en', 'es'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greeting',
    es: 'Saludo'
  };

  // logger message
  var logMessages = {
    en: 'Logged In',
    es: 'Conectado'
  }

  // prototype holds methods (to save memory space)
  Greetr.prototype = {

    // 'this' refers to the calling object at execution time
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {

      // check that is a valid language
      // references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function (formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // this refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      // make chainable
      return this;
    },

    // set language on the fly
    setLang: function (lang) {
      this.language = lang;

      // validate lang
      this.validate();

      // make chainable
      return this;
    },

    // method to take a selector and use jquery to update value
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      return this;
    }
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this;

    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
