"use strict";
/**
 * Ciclos convencionales y "For of" nuevo en ES6
 */
var shelby = {
    motor: '5.0 lts',
    traccion: 'trasera'
};
var cupra290 = {
    motor: '2.0 lts',
    traccion: 'delantera'
};
var s3 = {
    motor: '2.0 lts',
    traccion: 'quattro'
};
//Construimos el arreglo a recorrer:
var favorites = [shelby, cupra290, s3];
//Lo recorremos con
// 1. foreach:
favorites.forEach(function (element) {
    console.log(element.motor);
    console.log(element.traccion);
});
// 2. for:
for (var i in favorites) {
    var fav = favorites[i];
    console.log(fav.motor, fav.traccion);
}
// 3. another for:
for (var i = 0; i <= favorites.length - 1; i++) {
    var fav = favorites[i];
    console.log(fav.motor, fav.traccion);
}
// 4. For of (nuevo en ES6):
for (var _i = 0, favorites_1 = favorites; _i < favorites_1.length; _i++) {
    var fav = favorites_1[_i];
    console.log(fav.motor, fav.traccion);
}
// 5. for para propiedades del objeto:
for (var prop in cupra290) {
    console.log("cupra290." + prop);
}
//# sourceMappingURL=app.js.map