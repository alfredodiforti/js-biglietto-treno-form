var bottonegenera = document.getElementById('btngenera');
var bottoneannulla = document.getElementById('btnannulla');

//btngenera al click
bottonegenera.addEventListener('click', function() {
//ottieni dati utente
var nome = document.getElementById('nome').value;
var tratta = document.getElementById('tratta').value;
var fascia = document.getElementById('fascia').value;
//nomeoutput
//calcolo CostoBiglietto
var prezzokm = 0.21;
var costobiglietto = tratta * prezzokm ;

var offerta = 'biglietto standard'
if (fascia == 'minorenne') {
 costobiglietto = costobiglietto * 0.8 ;
 var offerta = 'sconto minorenne'
}
else if (fascia == 'over65') {
  costobiglietto = costobiglietto * 0.4 ;
  var offerta = 'sconto over65'
}
costobiglietto = costobiglietto.toFixed(2) + '€';
//generazione carrozza e numero BIGLIETTO
var numcarrozza = Math.floor(Math.random() * 10) + 1;
var numcodicecp = Math.floor(Math.random() * 1000) + 9000;
// generazione biglietto
var nomebiglietto = document.getElementById('nomeoutput').innerHTML = nome ;
var offertapplicata = document.getElementById('offertapplicata').innerHTML = offerta ;
var carozza = document.getElementById('numerocarozza').innerHTML = numcarrozza ;
var codicecp = document.getElementById('numerocodicecp').innerHTML = numcodicecp ;
var costofinale = document.getElementById('costodelbiglietto').innerHTML = costobiglietto ;
})
//bottoneannula
bottoneannulla
