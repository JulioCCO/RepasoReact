

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
}

//const {nombre, apellido, edad} = persona;

//console.log(nombre);
//console.log(apellido);
//console.log(edad);

const usesContexto = ({nombre, apellido, edad, rango = 'Capitan'}) => {
    
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usesContexto(persona);
console.log({nombreClave, anios, lat, lng});
