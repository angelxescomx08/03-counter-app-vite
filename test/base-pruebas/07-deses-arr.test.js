import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr',()=>{
    test('Debe retornar un string y un número',()=>{
        const [letters,numbers] = retornaArreglo();

        //expect(letter).toBe('ABC');
        //expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        //Esperar Cualquier tipo de string
        expect(letters).toEqual(expect.any(String));
    })
})