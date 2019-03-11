
// Conviertir este archivo de ES5 a ES6 - JavaScript 2015
// No es a TypeScript, solo JAVASCRIPT

// Constantes?
const AUTO = "Infinity Q50";

// Declaracion de variables?
let piloto = "Juan Martinez",
    copiloto = "Juana Meza";

// Destructuracion de arreglos:
let autos = ["eclipse","focus Rs","Leon Fr"];

let [eclipse,focus,leon] = autos;

console.log(eclipse,focus,leon);


// Destructuracion de objetos?
let superCar = {
  marca: "Mazda",
  motor: "2.5 lts",
  traccion: "Delantera"
};

let {marca,motor,traccion} = superCar;
console.log(marca,motor,traccion);

// Ciclo for Of?
for (let car of autos) {
    console.log(car);
}
