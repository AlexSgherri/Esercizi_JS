class BankAccount {
  #_amount = 0;

  constructor(initialAmount) {
    this.#_amount = initialAmount;
  }

  deposit(depositedValue) {
    this.amount = this.amount + depositedValue;
  }
  withdraw(vithdrewValue) {
    this.amount = this.amount - vithdrewValue ;
  }

  view() {
    console.log(this.amount);
  }

  get amount() {
    return this.#_amount;
  }

  set amount(Value) {
    this.#_amount = Value;
  }
}

class BankAccountVip extends BankAccount {
  deposit(depositedValue) {
    if (depositedValue >= 1000) {
      super.amount = (super.amount + depositedValue + depositedValue*3/100);
    } else {super.deposit(depositedValue)
    }
  }

  constructor(initialAmount) {
    super(initialAmount);
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view(); 