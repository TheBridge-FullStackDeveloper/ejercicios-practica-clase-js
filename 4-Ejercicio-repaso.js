// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
// let nombre ={}
// console.log(typeof nombre)

// tu código aqui
const ordenador = {
  marca:"La pava",
  tipo:"portátil",
  perifericos:["mouse","touchPad"],
  almacenamiento:{
    discos:["","HDD"],
    maestro:0
  }
}

// ordenador.almacenamiento.maestro === 0

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
// ordenador.marca / ordenador["marca"]
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//*Bucle for y for of
// dado el siguiente array:
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//Muestra por consola todos los nombres

for (let x = 0; x < gente.length; x++) {
  const element = gente[x];
  console.log(element.nombre)
  // console.log(gente[x].nombre)
}

for (const persona of gente) {
  console.log(persona.nombre)
}

// for (let index = 0 //iterador; index < array.length //condición; index++ //el aumento del iterador) {
//   const element = array[index]; //elemento del array
  // array es el array, index es el indice = array[index] = elemento
// }