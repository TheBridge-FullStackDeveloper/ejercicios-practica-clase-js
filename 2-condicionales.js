//* Ejercicio 1

// crea una condicion donde si el valor de una variable "age" es mayor de 18
// muestre por consola eres mayor de edad
// sino que muestre por consola eres menor de edad
let age = 18;
if (age >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("no eres mayor de edad");
}

//* Ejercicio 2.1

// Crea un objeto llamado "person" con las siguientes propiedades:
// "age" con un valor numérico que representa la edad de la persona (por ejemplo, 17).
// "sonOfBoss" con un valor booleano que indica si la persona es el hijo del jefe (por ejemplo, true).
const person = {
  age: 16,
  sonOfBoss: true,
};

//* Ejercicio 2.2

// Utiliza una estructura de control para evaluar la edad de la persona:
// Si la edad es mayor o igual a 18, muestra el mensaje "Eres mayor de edad" en la consola.
// Si la edad es menor a 18 pero la propiedad "sonOfBoss" es verdadera, muestra el mensaje "No eres mayor de edad pero eres el hijo del jefe" en la consola.
// Si ninguna de las condiciones anteriores se cumple, muestra el mensaje "Eres menor de edad" en la consola.

if (person.age >= 18) {
  console.log("Eres mayor de edad");
} else if (person.age < 18 && person.sonOfBoss == true) {
  console.log("No eres mayor de edad pero eres el hijo del jefe");
} else {
  console.log("Eres menor de edad");
}

//* Convierte el ejercicio 2.2 en un switch

switch (true) {
  case person.age >= 18:
    console.log("Eres mayor de edad");
    break;
  case person.age < 18 && person.sonOfBoss == true:
    console.log("No eres mayor de edad pero eres el hijo del jefe");
    break;
  default:
    console.log("Eres menor de edad");
    break;
}

const number = 2;

switch (number) {
  case 1:
    console.log("Eres el numero 1");
    break;
  case 2:
    console.log("Eres el numero 2");

    break;
  case 3:
    console.log("Eres el numero 3");

    break;

  default:
    console.log("No eres ni el numero 1, ni el 2, ni el 3...Eres un pringado...")
    break;
}
