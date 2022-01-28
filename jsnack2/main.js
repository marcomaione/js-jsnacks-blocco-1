//chiedo utente fino a quale numero stampare il cubo
const numero = parseInt(prompt('fino a quale a numero vuoi stampare il cubo?'));

//verifico se il numero inserito è valido

if ( isNaN(numero) || numero <= 0) {
     alert('il numero non è valido')
} else {

     for ( let i=1; i<=numero; i++) {
          const cubo = Math.pow(i, 3);

          console.log(cubo)
     }
}