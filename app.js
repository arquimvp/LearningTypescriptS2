"use strict";
/*Constantes (const)

Regla:
- Por convencion todas las constantes deben ir en mayusculas.
*/
/**
 * No puedes mutar la variable dentro del mismo scope
 * Si puedes redeclararla o reutilizarla en diferentes scopes.
 */
var ENDPOINT = 'https://140.34.4.5/api/user';
if (true) {
    var ENDPOINT_1 = 'https://1.1.1.1';
}
/**
 * En iteraciones como BUCLES foreach, for etc, en cada iteracion se considera un scope nuevo por lo tanto es posble hacer lo siguiente:
 */
for (var _i = 0, _a = [1, 2, 3, 4, 5]; _i < _a.length; _i++) {
    var I = _a[_i];
    console.log(I);
}
/**
 * constantes en OBJETOS
 */
var USUARIO = {
    activo: true,
    rol: 'admin'
};
USUARIO.activo = false;
console.log(USUARIO);
//# sourceMappingURL=app.js.map