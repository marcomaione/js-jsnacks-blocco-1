// calcola la somma e la media dei primi 10 numeri

//dichiaro una variabile che inizializzo a 0
let somma = 0;
let media = 0;
const limite = 10;
//scorro i primi 10 numeri => 1,2,3...10

for ( let i = 1; i <= limite; i++) {
     somma += i;
}

// calcolo la media e stampo la somma dei numeri
media = somma / limite;
alert(`la somma è: ${somma}; la media è ${media}`);