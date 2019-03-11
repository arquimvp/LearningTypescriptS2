"use strict";
/*
ES6 = ES2015

let

Reglas:
- Debe sustituir "var" por "let" de ES5
- No puedes redeclarar una variable dentro del mismo scope, pero si puedes redeclararla en diferentes scopes.

*/
//let myname : string = 'alberto';
var myname = 'alberto';
if (true) {
    //let myname : string = 'juan' //la redeclaracion es valida sin embargo solo vive dentro del scope que la contiene. Es util si lo que requieres es reutilizar el nombre de la variable.
    var myname = 'juan';
}
console.log(myname); //alberto
//# sourceMappingURL=app.js.map