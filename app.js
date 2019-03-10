/* Objetos con tipos especificos
Yo puedo definir un objeto con diferentes tipos especificos para las propiedades:
*/
var desarrollador = {
    perfil: 'ios',
    edad: 30,
    pasatiempos: ['xbox', 'cervezas'],
    vidaSocial: false
};
//Typescript no permite traspilar la siguiente linea
desarrollador.pasatiempos = 2;
