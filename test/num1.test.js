import bisiesto from '../app.js';

describe('#bisiesto(x)', ()=>{
   
    test('testear si es divisible por 400',()=>{
        expect(bisiesto(400)).toBe(true);
    });
    test('testear si es divisible por 100',()=>{
        expect(bisiesto(700)).toBe(false);
    });
    test('testear si es divisible por 4',()=>{
        expect(bisiesto(8)).toBe(true);
    });
});