const { dolarAYen, euroADolar, yenALibra } = require('./app'); // Ruta de archivo de app para importación de módulos

describe('Conversión de divisas', () => {
    test('Convierte de dólar estadounidense a yen', () => {
        expect(dolarAYen(1)).toBe(149.37); // 1 dólar debería ser igual a 149.37 yenes
        expect(dolarAYen(2)).toBe(298.74); // 2 dólares deberían ser igual a 298.74 yenes
    });

    test('Convierte de euro a dólar estadounidense', () => {
        expect(euroADolar(1)).toBe(1.07); // 1 euro debería ser igual a 1.07 dólares
        expect(euroADolar(2)).toBe(2.14); // 2 euros deberían ser igual a 2.14 dólares
    });

    test('Convierte de yen a libra esterlina', () => {
        expect(yenALibra(1)).toBe(0.0054); // 1 yen debería ser igual a 0.0054 libras
        expect(yenALibra(2)).toBe(0.0108); // 2 yenes deberían ser igual a 0.0108 libras
    });
});
