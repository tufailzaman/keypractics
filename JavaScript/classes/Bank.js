class Bank {
    balance = 0;
    constructor (balance){
        this.balance = this.balance + balance
    }
    credit (balance){
        // Gaurd Clause
        if (balance <= 0) return;
        this.balance = this.balance  + balance;
    }
    debit (balance){
        if (balance <= 0 && balance > this.balance)return;
        this.balance = this.balance + balance;
    }
    get balance () {
        return this.balance;
    }

}
const user1 = new Bank(500)
user1.credit(100);
user1.credit(100);
user1.credit(100);
user1.debit(200);
console.log("your balance is : " user1.getbalance())