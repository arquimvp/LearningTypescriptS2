//#1
//Crear un tipo apartir del cual pueda utilizar en los 2 objetos siguientes:
// Objetos:

type camioneta = {
  color: string,
  modelo: string,
  blindada: boolean,
  rodar?: ()=>void
}

let patriot4x4: camioneta = {
  color: "Negra",
  modelo: "4x4",
  blindada: true
};

let lobo4x4: camioneta = {
  color: "Negra",
  modelo: "Harley Davidson",
  blindada: true,
  rodar(){ // El metodo rodar es opcional
    console.log("rodando");
  }
};


//#2
//Crear un tipo que pueda utilizar para el siguiente objeto.
// desarrolladores debe de ser un arreglo de objetos personalizados.

type Developer = {
  perfil: string,
  edad: number,
  vidaSocial: boolean
}

let desarrolladores : Developer[] = [{
  perfil:"IOS",
  edad: 23,
  vidaSocial:false
},{
  perfil:"ANDROID",
  edad: 25,
  vidaSocial:true
},{
  perfil:"IONIC",
  edad: 21,
  vidaSocial:false
}];


//#3
// Multiples tipos
// cree dos tipos, uno para batman y otro para superman

type Batman = {
  poder: string,
  estatura: number
}

type Superman = {
  lider: boolean,
  poderes: string[]
}

let batman : Batman = {
  poder:"millonario",
  estatura: 1.78
};

let superman : Superman = {
  lider:true,
  poderes: ["volar","vision calorifica","velocidad", "aliento helado"]
}

// superhybrid, debe poder ser cualquiera de los dos superheroes (batman y superman)
let superHybrid : Batman | Superman;

superHybrid = batman;
superHybrid = superman;


//tsconfig.json --------->   IMPORTANTE!

/**
 * El archivo tsconfig.json indica al compilador de typescript las reglas generales para la compilacion.
 * 
 * Hay muchas configuraciones que podemos aplicar sobre este archivo, pero hay una muy importante que nos sirve para poder
 * debuguear directamente el archivo ts
 * "sourceMap": true
 * Habra que ejecutar el comando "tsc" por si solo en la consola.
 * Esta propiedad nos permitira obtener el archivo app.js.map el cual contiene los mapas de origen que vinculan al archivo ts con el js.
 * de esta forma podremos debuguear directamente nuestro archivo ts.
 * En un proyecto Angular o Ionic, no tendremos que preocuparnos por configurar esta propiedad, por defecto viene habilitada.
 * Al habilitar dicha propiedad se habilita "use strict", que es el modo estricto que no puede, por ejemplo, usar variables no declaradas.
 */
