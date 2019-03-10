/* Objetos con tipos especificos
Yo puedo definir un objeto con diferentes tipos especificos para las propiedades:
*/

let desarrollador : { perfil : string, edad : number, pasatiempos : string[], vidaSocial : boolean } = {
  perfil: 'ios',
  edad: 30,
  pasatiempos: ['xbox','cervezas'],
  vidaSocial: false
}

//Typescript no permite traspilar la siguiente linea, el objeto desarrollador  tiene una definicion especifica.
desarrollador.pasatiempos = 2;