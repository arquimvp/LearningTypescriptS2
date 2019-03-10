/*
Yo puedo definir un objeto de tipo 'Developer':
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
