/**
 * Destructuracion de objetos
 */

 //Objeto a destructurar:
 let superAutos = {
   sport: 'cupra 290',
   ponyCar:  'camaro',
   muscleCar: 'shelby'
 }

 //Destructuracion:
 //(No importa el orden de la destructuracion.)
 let {sport, muscleCar, ponyCar } = superAutos;

 console.log(sport);
 console.log(ponyCar);
 console.log(muscleCar);

 //Si quiero cambiar el nombre de la variable
 let {sport:sport290, ponyCar:pony, muscleCar:muscle} = superAutos;

 console.log(sport290);
 console.log(pony);
 console.log(muscle);


/**
 * Destructuracion de arreglos
 */

 //Arreglo a destructurar:
 let mundiales = ['mexico', 'rusia', 'brazil', 'francia'];

 //destructuracion:
 let [m1, m2, m3, m4] = mundiales;

 console.log(m1);
 console.log(m2);
 console.log(m3);
 console.log(m4);

 //Si solo requiriera el 3er mundial:

 let [, , m33]= mundiales;

 console.log(m33);