

const nombre = 'Julio Cesar';
const apellido = 'Castro';

const nombreCompleto = nombre + " " + apellido;
const nombreCompletoTemplate = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(nombreCompletoTemplate);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un saludo: ${getSaludo(nombreCompleto)}`);