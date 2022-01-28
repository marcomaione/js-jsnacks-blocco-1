// creare una variabile e la inizializo a zero
let somma = 0;
// chiedo per 10 volte un numero all'utente 
let i = 0;

while (i < 10) {

     let numero = parseInt(prompt('inserisci un numero'));

     if (isNaN(numero)) {
          numero = 0;
          alert('il valore inserito non è un numero');
     } 

     somma += numero;


     console.log('il totale vale: ' + somma);

     i++;


}

//stampo la somma

alert('la somma dei numeri è :' + somma)


