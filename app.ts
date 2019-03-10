//type
//La palabra reservada "type" me sirve para crear tipos personalizados.
//Lo siguiente no es un objeto es una definicion de un tipo:
type Developer = {
  perfil : string, 
  edad : number, 
  pasatiempos : string[], 
  vidaSocial : boolean, 
  getEdad: () => number
}

/*
Yo puedo definir un objeto de tipo 'Developer':
*/

let desarrollador : Developer = {
  perfil: 'ios',
  edad: 30,
  pasatiempos: ['xbox','cervezas'],
  vidaSocial: false,
  getEdad(){
    return this.edad;
  }
}

//El objeto tiene un metodo para devolver la edad:
console.log(desarrollador.getEdad()); //30