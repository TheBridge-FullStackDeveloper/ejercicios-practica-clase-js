//Bucle for

//Dado el siguiente array:
const vueltas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(vueltas[0])
// console.log(vueltas[1])
// console.log(vueltas[2])
// console.log(vueltas[3])

// console.log(vueltas.length)
// Utiliza un bucle "for" para recorrer el array:
// En cada iteración, muestra en la consola el mensaje "Vuelta nº " seguido del valor correspondiente de "vueltas[i]". EJ->"Vuelta nº 1"...
// console.log(vueltas[1])
//  i es el contador
// for (let i = 0; i < vueltas.length; i++) {
//     const vuelta = vueltas[i];
//     console.log(vuelta)
// }
for (let i = 0; i < vueltas.length; i++) {
    console.log(vueltas[i])
}

//while
let i = 0; 
while (i< vueltas.length) {
    console.log(vueltas[i])
    i++
}

// Realiza lo mismo con for of

for (const lechuga of vueltas) {
    console.log("lechuga",lechuga);
}
