/**
 * Definicion de variables con multiples tipos:
 */
type Developer = {
  perfil : string, 
  edad : number
};

/**
 * Puedo utilizar el pipe | para asignar diferentes tipos a mi variable.
 */

//Variable multitipada:
let multitipada : string | number | Developer = `Alberto`;

multitipada = {
  perfil: 'android',
  edad: 29
};


multitipada = 80;


