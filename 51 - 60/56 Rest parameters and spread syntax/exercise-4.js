function sum(...num1) {
  return num1.reduce((acc, num) => acc - num, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); 


console.log(somma(numbers, 0))