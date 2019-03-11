/** 
 * Ciclos convencionales y "For of" nuevo en ES6
 */

 let shelby = {
   motor: '5.0 lts',
   traccion: 'trasera'
 }

 let cupra290 = {
   motor: '2.0 lts',
   traccion: 'delantera'
 }

 let s3 = {
   motor: '2.0 lts',
   traccion: 'quattro'
 }

 //Construimos el arreglo a recorrer:
 let favorites = [shelby, cupra290, s3];

//Lo recorremos con
 // 1. foreach:
 favorites.forEach(element => {
   console.log(element.motor);
   console.log(element.traccion);
 });

 // 2. for:
 for (let i in favorites) {
   let fav = favorites[i];
   console.log(fav.motor, fav.traccion);
 }

 // 3. another for:
 for (let i = 0; i <= favorites.length - 1; i++) {
   let fav = favorites[i];
   console.log(fav.motor, fav.traccion);
 }

 // 4. For of (nuevo en ES6):
 for (let fav of favorites) {
  console.log(fav.motor, fav.traccion);
 }

 // 5. for para propiedades del objeto:
 for (let prop in cupra290) {
   console.log(`cupra290.${prop}`);
 }