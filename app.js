"use strict";
/**
 * Templates literales (nombre oficial al utilizar el backtick ``)
 */
var nombre = 'Alberto';
var apellido = 'Gutierrez';
function armaNombre() {
    return nombre + " " + apellido;
}
var parrafos = "\n                          1. primer linea con: " + nombre + "\n                          2. segunda linea con: " + apellido + "\n                          3. tercer linea con nombre completo: " + armaNombre() + "\n                          4. cuarta linea con una operacion aritmetica: " + (5 + 5) + "\n                        ";
console.log(parrafos);
//# sourceMappingURL=app.js.map