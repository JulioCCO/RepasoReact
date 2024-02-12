
// Funciones en JS
const saludar = function(nombre){  //  se puede hacer asi
    return `Hola ${nombre}`;
}

const saludar2 = nombre => { //  si solo se tiene un argumento se pueden quitar los parentesis
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`; // si solo se retorna un valor se puede hacer asi

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

console.log(getUser());

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = nombre =>
    ({
        uid: 'ABC567',
        username: nombre
    })
;

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);