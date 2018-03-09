var g = G$('ashik', 'jaber');
console.log(g.greeting());

g.greet().greet(true);
g.greet().setLang('es').greet(true);
g.setLang('en').log();


// using with jQuery
$('#login').on('click', function() {
  var loginGrtr = G$('john', 'doe');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
