/*Constantes (const)

Regla:
- Por convencion todas las constantes deben ir en mayusculas.
*/

/**
 * No puedes mutar la variable dentro del mismo scope  
 * Si puedes redeclararla o reutilizarla en diferentes scopes.
 */
const ENDPOINT : string = 'https://140.34.4.5/api/user';

if (true) {
  const ENDPOINT : string = 'https://1.1.1.1';
}

/**
 * En iteraciones como BUCLES foreach, for etc, en cada iteracion se considera un scope nuevo por lo tanto es posble hacer lo siguiente:
 */

for (const I of [1,2,3,4,5]){
  console.log(I);
}


/** 
 * constantes en OBJETOS.
 * No me permite mutar la estructura del objeto.
 * En este caso unicamente me permite cambiar el valor de las propiedades de la siguiente manera:
 */

 const USUARIO = {
   activo: true,
   rol: 'admin'
 }

 USUARIO.activo = false;

 console.log(USUARIO);