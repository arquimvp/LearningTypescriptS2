/* Objetos con tipos especificos y metodos
Yo puedo definir un objeto con diferentes tipos especificos para las propiedades y tambien metodos:
*/
var desarrollador = {
    perfil: 'ios',
    edad: 30,
    pasatiempos: ['xbox', 'cervezas'],
    vidaSocial: false,
    getEdad: function () {
        return this.edad;
    }
};
//El objeto tiene un metodo para devolver la edad:
console.log(desarrollador.getEdad()); //30
