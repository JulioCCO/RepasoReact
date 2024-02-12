
import { getHeroesByID } from "./Bases/08-imp-exp";
/*
const promesa = new Promise((resolve, reject) =>{

    setTimeout(() => {
        const heroe = getHeroesByID(2);
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    }, 2000);
});

promesa.then((heroe)=> {
    console.log('heroe: ', heroe);
}).catch( err => console.warn(err));*/

const getHeroesByIDAsync = (id)=> {

    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            const heroe = getHeroesByID(id);
            if(heroe){
                resolve(heroe);
            }else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000);
    });

};

getHeroesByIDAsync(4)
.then(console.log)
.catch(console.warn)
.finally(()=>{
    console.log('terminamos');
})