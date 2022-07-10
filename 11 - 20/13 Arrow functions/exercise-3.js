// Versione per il calcolo matematico dell'espressione

/*

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const log = value => console.log(value);

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5));

*/

// Versione stringa concatenata

const sum = (a, b) => `(${a} + ${b})`;

const subtract = (a, b) => `(${a} - ${b})`;

const multiply = (a, b) => `${a} * ${b}`;

const divide = (a, b) => `${a} / ${b}`;

const log = value => console.log(value);

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5));