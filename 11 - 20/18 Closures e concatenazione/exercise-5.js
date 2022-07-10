// function memoize(fn) {
//   let cache = {};
//   return function(x){
//     if (!(x in cache)){
//       cache[x]= fn(x);
//       return (`Calculating result for ${x} = ${cache[x]}`);
//     }
//     else{
//       console.log(cache)
//       return (`Fetching from cache for ${x} = ${cache[x]}`);
//     }
//   }
// }

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }

// let factorialMemoize = memoize(factorial);
// console.log(factorialMemoize(10));
// console.log(factorialMemoize(6));
// console.log(factorialMemoize(5));

// //prova ripetizione

// console.log(factorialMemoize(5));



function memoize(fn) {
  let cache = {};
  // let prova;
    return function pippo (number){

      if (number in cache){
        return (`numero in cache ${cache[number]}`);
      }
    
      else{
        console.log("numero iterato " +number)
        cache[number] = fn(number);
        console.log("valore "+cache[number])
        // prova = prova.replace(/\D/g,'');
        return cache[number]; // Se lo porto come la riga 36 mi riporta NaN su tutta la cache
      }
    
      
    }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return (x * factorial(x - 1)); // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1 
}//       10=number * pippo(number -1)

factorial = memoize(factorial);
console.log(factorial(3));
console.log(factorial(4));

// console.log(factorial(6));
// console.log(factorial(5));
