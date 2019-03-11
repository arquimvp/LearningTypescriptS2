/** 
 * Templates literales (nombre oficial al utilizar el backtick ``)
 */

let nombre: string = 'Alberto';
let apellido: string = 'Gutierrez';

function armaNombre(): string {
  return `${nombre} ${apellido}`;
}

let parrafos: string = `
                          1. primer linea con: ${nombre}
                          2. segunda linea con: ${apellido}
                          3. tercer linea con nombre completo: ${armaNombre()}
                          4. cuarta linea con una operacion aritmetica: ${5 + 5}
                        `;

console.log(parrafos);

