

const arreglo = [1, 2, 3, 4];

const arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
})

console.log(arreglo);
console.log(arreglo2); // El operador spread permite extraer los elementos de un arreglo y copiarlos en otro arreglo
console.log(arreglo3); // El metodo map() crea un nuevo arreglo con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos