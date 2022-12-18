
describe('Pruebas en <DemoComponent/>',()=>{

    test('Esta prueba no debe fallar',()=>{
        //inicialización de variables
        const mensaje1 = 'Hola mundo'

        //estímulo
        const mensaje2 = mensaje1.trim();

        //observar el comportamiento esperado
        expect(mensaje2).toBe(mensaje1);
    })
})