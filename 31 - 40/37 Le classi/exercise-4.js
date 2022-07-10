class BankAccount {
    deposit(importo){
        this.balance += importo;
    }

    withdraw(importo){
        if (this.balance < importo){
            return console.log("Errore, Non hai abbastanza soldi sul conto");
        }
        this.balance -= importo;
    }

    view (){
        return console.log(this.balance);
    }

    constructor (importo=0){
        this.balance = importo;
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();