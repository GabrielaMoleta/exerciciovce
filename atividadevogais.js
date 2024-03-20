let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

let texto = "O rato roeu a roupa do rei de roma";
texto = texto.toLocaleLowerCase();
let arrayLetras = texto.split('');

let arrayVogais = [];
let arrayConsoantes = [];
let arrayEspacos = [];

for(let i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    } else if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
    } else if (arrayLetras[i] === ' ') {
        arrayEspacos.push(arrayLetras[i]);
    }
}


console.log("Texto original:", texto);
console.log("Vogais encontradas:", arrayVogais.toString());
console.log("Total de vogais: " + arrayVogais.length);
console.log("Consoantes encontradas:", arrayConsoantes.toString());
console.log("Total de consoantes: " + arrayConsoantes.length);
console.log("Total de espaços: " + arrayEspacos.length);