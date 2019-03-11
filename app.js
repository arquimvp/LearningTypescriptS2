"use strict";
//#1
//Crear un tipo apartir del cual pueda utilizar en los 2 objetos siguientes:
// Objetos:
var patriot4x4 = {
    color: "Negra",
    modelo: "4x4",
    blindada: true
};
var lobo4x4 = {
    color: "Negra",
    modelo: "Harley Davidson",
    blindada: true,
    rodar: function () {
        console.log("rodando");
    }
};
var desarrolladores = [{
        perfil: "IOS",
        edad: 23,
        vidaSocial: false
    }, {
        perfil: "ANDROID",
        edad: 25,
        vidaSocial: true
    }, {
        perfil: "IONIC",
        edad: 21,
        vidaSocial: false
    }];
var batman = {
    poder: "millonario",
    estatura: 1.78
};
var superman = {
    lider: true,
    poderes: ["volar", "vision calorifica", "velocidad", "aliento helado"]
};
// superhybrid, debe poder ser cualquiera de los dos superheroes (batman y superman)
var superHybrid;
superHybrid = batman;
superHybrid = superman;
//tsconfig.json --------->   IMPORTANTE!
/**
 * Hay muchas configuraciones que podemos aplicar sobre este archivo, pero hay una muy importante que nos sirve para poder
 * debuguear directamente el archivo ts
 * "sourceMap": true
 * Habra que ejecutar el comando tsc por si solo en la consola.
 * Esta propiedad nos permitira obtener el archivo app.js.map el cual contiene los mapas de origen que vinculan al archivo ts con el js.
 * de esta forma podremos debuguear directamente nuestro archivo ts.
 * En un proyecto Angular o Ionic, no tendremos que preocuparnos por configurar esta propiedad, por defecto viene habilitada.
 * Al habilitar dicha propiedad se habilita "use strict", que es el modo estricto que no puede, por ejemplo, usar variables no declaradas.
 */
//# sourceMappingURL=app.js.map