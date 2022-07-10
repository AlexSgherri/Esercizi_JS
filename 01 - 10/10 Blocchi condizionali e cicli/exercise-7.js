function sumUntil(maxValue) {
  let sum = 0;
  for (let i = maxValue; i > 0 ; i--){
    sum += i;
  }
  return sum;
}

console.log(sumUntil(6));