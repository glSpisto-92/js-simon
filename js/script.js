$(function(){
  // Un alert() espone 5 numeri generati casualmente.
  // Da li parte un timer di 30 secondi.
  // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
   // tramite il prompt().
  // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
   // da indovinare sono stati individuati.
  //

  // funzione che genera numeri random
  function numRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  var numeriRandom;

  // array dove verranno salvati i numeri dell'alert
  var numeriUtente = [];
  numeriInput = [];

  // ciclo finchè i numeri random arrivano a 5 e li  pusho in un array
  while (numeriUtente.length < 5){

    numeriRandom = numRandom(1, 100);
    numeriUtente.push(numeriRandom);

  }
  // mostro a schermo i 5 numeri random
  alert(numeriUtente);

  var  inputUtente;

// setto una funzione di timing di tot secondi dopo aver inserito i numeri
  setTimeout(function () {


    // creo un ciclo per far inserire all'utente 5 numeri
    var i = 0;

    while (i < 5){
      inputUtente = parseInt(prompt('Inserisci 1 alla volta i 5 numeri'));

      // controllo se tra i numeri inseriti dall'utente ci siano i numeri random
      if(numeriUtente.includes(inputUtente)) {
        numeriInput.push(inputUtente);
      }
      i++;
     }

     console.log('Hai ricordato ' + numeriInput.length + ' numeri : ' + numeriInput);
  }, 3000);

});
