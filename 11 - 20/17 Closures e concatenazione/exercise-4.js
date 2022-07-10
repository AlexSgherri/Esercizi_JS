function calculate() {
  return {
    total: 0,
    add(n) {
      this.total += n;
      return this;
    },
    multiply(n) {
      this.total *= n;
      return this;

    },
    sub(n) {
      this.total -= n;
      return this;

    },
    divide(n) {
      this.total /= n;
      return this;

    },
    printResult() {
      console.log(this.total);
    }
  
  };
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
