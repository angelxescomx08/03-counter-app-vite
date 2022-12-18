import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp',()=>{
    test('getHeroeById debe retornar un héro por id',()=>{
        const id =  1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe retornar undefined si el id no existe',()=>{
        const id =  1000;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar una arreglo de 3 elementos de DC',()=>{
        const owner =  'DC';
        const heros = getHeroesByOwner(owner);

        expect(heros.length).toBe(3);
        expect(heros).toEqual(heroes.filter(heroe=>heroe.owner === owner));
    })

    test('getHeroesByOwner debe retornar una arreglo de 2 elementos de Marvel',()=>{
        const owner =  'Marvel';
        const heros = getHeroesByOwner(owner);

        expect(heros.length).toBe(2);
        expect(heros).toEqual(heroes.filter(heroe=>heroe.owner === owner));
    })
})