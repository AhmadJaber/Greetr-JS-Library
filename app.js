// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('ashik', 'jaber');
console.log(g.greeting());

// use our chainable methods
g.greet().greet(true);
g.greet().setLang('es').greet(true);
g.setLang('en').log();


// using with jQuery
// let's use our object on the click of the login button
$('#login').on('click', function() {

  // create a new 'Greetr' object (let's pretend we know the name from the login)
  var loginGrtr = G$('john', 'doe');

  // hide the login on the screen
  $('#logindiv').hide();

  // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
