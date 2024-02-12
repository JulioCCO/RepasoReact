
//import heroes,{owners} from '../Data/heroes'
import heroes from '../Data/heroes'
//console.log(owners);

export const getHeroesByID = (id) =>{
    return heroes.find((element) => element.id === id);
}
//const {name, owner } = getHeroesByID(2);
//console.log(name,owner );

export const getHeroesByOwner= (owner) =>{
    return heroes.filter((heroe) => heroe.owner === owner)
};
//const result2 = getHeroesByOwner('DC');
//console.log(result2);