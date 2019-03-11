/** 
 * Funciones de flecha. 
 * Tambien conocidas como: 
 * 1. Arrow functions: () => {}
 * 2. Lambda functions
 * 3. Funciones de flecha gorda
 * 
 * Sus caracteristicas:
 * 
 *  1. Pueden reemplazar a las funciones normales.
 *  2. En las funciones convencionales, cuando trabajamos con funciones asincronas anidadas o una peticion anidada a un servicio http,
 *      se crea un nuevo scope y el puntero del scope principal se pierde. A diferencia, en las funciones de flecha, el scope principal (this) en el que se declaran, 
 *      sigue siendo el mismo scope en su implementacion, se mantiene y no cambia.
 *  3. Si la implementacion solo contiene una instruccion se pueden evitar poner las llaves y la palabra return.
 * 
 * //La ASINCRONIA es un pilar fundamental de Javascript.
 * 
 */

 /**
  * Ejemplo: Conversion de una funcion convencional a arrow function:
  */

  //Normal:
  
  // function sumar(a:number, b:number):number{
  //   return a + b;
  // }
  
  //Arrow function:

  let sumar = (a:number, b:number) : number => a + b;

  //Si necesitamos hacer mas instrucciones dentro del cuerpo de la funcion podemos hacer lo siguiente:

  let restar = (a:number, b:number) : number => {
    a = a;
    b = b;
    return a - b;
  };

  console.log(sumar(2,6)); //8

  console.log(restar(6,4)); //2


  /** 
   * Ejemplo donde son utiles las funciones de flecha
   */

   //Funcion convencional: Funciona bien imprimiendo en consola "Alberto es mi nombre"

  let developer = {
    nombre: 'Alberto',
    diTuNombre: function(){
      console.log(this.nombre + " es mi nombre");
    }
  };

  developer.diTuNombre();

  //Funcion con setTimeout (simulando una funcion asincronica que genera un nuevo scope dentro de la funcion contenedora)
  //Sin embargo fue necesario redefinir el scope principal 
  let developerIos = {
    nombre: 'Mariano',
    diTuNombre: function(){
      let self = this;          //Se redefine el scope para mantenerlo dentro de la funcion anidada.
      setTimeout(function(){
        //console.log(this.nombre + " es mi nombre");     //Puedes descomentar esta linea para validar que el contexto principal se ha perdido.
        console.log(self.nombre + " es mi nombre");
      },1000);
    }
  };

  developerIos.diTuNombre();

  //Con ARROW FUNCTION voila!!!!!

  let developerIonic = {
    nombre: 'Ismael',
    diTuNombre: function(){
      
      setTimeout( () => console.log(this.nombre + " es mi nombre"), 1000);    //Aqui se mantiene el scope (this) principal ;)

    }
  };

  developerIonic.diTuNombre();