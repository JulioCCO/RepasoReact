const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'Bogota',
        zip: 111111,
        lat: 14.3232,
        lng: 34.9233321
    },
}

console.log(persona);
console.log({persona}); // para saber como se llama el objeto

const persona2 = persona; // no es un clon, es una referencia
const persona3 = {...persona}; // clonar el objeto
persona3.nombre = 'Carlos';
persona3.edad = 30;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);
console.log(persona3);