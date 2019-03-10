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
  rodar(){ // El metodo rodar es opcional
    console.log("rodando");
  }
};


//#2
//Crear un tipo que pueda utilizar para el siguiente objeto.
// desarrolladores debe de ser un arreglo de objetos personalizados.
var desarrolladores = [{
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
var batman = {
  poder:"millonario",
  estatura: 1.78
};

var superman = {
  lider:true,
  poderes: ["volar","vision calorifica","velocidad", "aliento helado"]
}

// superhybrid, debe poder ser cualquiera de los dos superheroes (batman y superman)
var superHybrid;

superHybrid = batman;
superHybrid = superman;
