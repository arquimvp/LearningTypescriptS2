/* Objetos basicos
Yo puedo definir un objeto con diferentes tipos de propiedades:
*/

let desarrollador = {
  perfil: 'ios',
  edad: 30,
  pasatiempo: 'xbox',
  vidaSocial: false
}

/*Automaticamente typescript creo un tipo para definir al objeto de manera estricta:
El siguiente codigo debe marcarse como erroneo pues hace falta definir el perfil y la vodaSocial.
*/

desarrollador = {
  edad: 50,
  pasatiempo: 'futbol'
}