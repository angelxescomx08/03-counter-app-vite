import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string',()=>{
    test('getSaludo debe retornar hola Angel',()=>{
        const nombre = 'Angel';
        const mensaje = getSaludo(nombre);

        expect(mensaje).toBe(`Hola ${nombre}`);
    })
})