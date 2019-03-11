"use strict";
/**
 * Destructuracion de objetos
 */
//Objeto a destructurar:
var superAutos = {
    sport: 'cupra 290',
    ponyCar: 'camaro',
    muscleCar: 'shelby'
};
//Destructuracion:
//(No importa el orden de la destructuracion.)
var sport = superAutos.sport, muscleCar = superAutos.muscleCar, ponyCar = superAutos.ponyCar;
console.log(sport);
console.log(ponyCar);
console.log(muscleCar);
//Si quiero cambiar el nombre de la variable
var sport290 = superAutos.sport, pony = superAutos.ponyCar, muscle = superAutos.muscleCar;
console.log(sport290);
console.log(pony);
console.log(muscle);
/**
 * Destructuracion de arreglos
 */
//Arreglo a destructurar:
var mundiales = ['mexico', 'rusia', 'brazil', 'francia'];
//destructuracion:
var m1 = mundiales[0], m2 = mundiales[1], m3 = mundiales[2], m4 = mundiales[3];
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
//Si solo requiriera el 3er mundial:
var m33 = mundiales[2];
console.log(m33);
//# sourceMappingURL=app.js.map