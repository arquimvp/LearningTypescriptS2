/*
ES6 = ES2015

let

Reglas:
- Debe sustituir "var" por "let" de ES5
- No puedes redeclarar una variable dentro del mismo scope, pero si puedes redeclararla en diferentes scopes.

*/

let myname : string = 'alberto';

if(true){
  let myname : string = 'juan' //la redeclaracion es valida sin embargo solo vive dentro del scope que la contiene. Es util si lo que requieres es reutilizar el nombre de la variable.
}

//Con el codigo anterior si hubieses utilizado var el console.log imprimiria "alberto".

console.log(myname); //alberto

