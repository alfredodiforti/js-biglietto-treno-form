var bottonegenera = document.getElementById('btngenera');
var bottoneannulla = document.getElementById('btnannulla');

//btngenera al click
bottonegenera.addEventListener('click', function() {
//ottieni dati utente
var nome = document.getElementById('nome').value;
var tratta = document.getElementById('tratta').value;
var fascia = document.getElementById('fascia').value;
//calcolo CostoBiglietto
var prezzokm = 0.21;
var prezzodilistino = tratta * prezzokm ;
var prezzominorenne = prezzodilistino * 0.8 ;
var prezzoover65 = prezzodilistino * 0.4 ;
})
