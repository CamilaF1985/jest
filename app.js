// Función para convertir de dólar estadounidense a yen:
function dolarAYen(montoDolares) {
    const tasaCambioDolarYen = 149.37; //tasa de cambio de dólar a yen
    return montoDolares * tasaCambioDolarYen;
}

// Función para convertir de euro a dólar estadounidense:
function euroADolar(montoEuros) {
    const tasaCambioEuroDolar = 1.07; //tasa de cambio de euro a dólar
    return montoEuros * tasaCambioEuroDolar;
}

// Función para convertir de yen a libra esterlina:
function yenALibra(montoYen) {
    const tasaCambioYenLibra = 0.0054; //tasa de cambio de yen a libra esterlina
    return montoYen * tasaCambioYenLibra;
}

// Ejemplos de uso:
const montoEnDolares = 100;
const montoEnEuros = 50;
const montoEnYen = 5000;

const montoEnYenEquivalentes = dolarAYen(montoEnDolares);
const montoEnDolaresEquivalentes = euroADolar(montoEnEuros);
const montoEnLibrasEquivalentes = yenALibra(montoEnYen);

// Se imprimen los valores por consola al correr la app en un entorno de desarrollo:
console.log(`${montoEnDolares} dólares son equivalentes a ${montoEnYenEquivalentes} yenes.`);
console.log(`${montoEnEuros} euros son equivalentes a ${montoEnDolaresEquivalentes} dólares.`);
console.log(`${montoEnYen} yenes son equivalentes a ${montoEnLibrasEquivalentes} libras.`);

module.exports = { dolarAYen, euroADolar, yenALibra }; // Exportación de módulos para prueba
