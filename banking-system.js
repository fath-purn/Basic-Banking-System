// class BankAccount {
//     constructor() {
//         this.balance = 0;
//     }

//     deposit(amount) {
//         return new Promise((resolve, reject) => {
//             if (isNaN(amount) || amount <= 0) {
//                 reject("Invalid deposit amount");
//             } else {
//                 setTimeout(() => {
//                     this.balance += amount;
//                     resolve(`Deposit of ${amount} successful. Current balance: ${this.balance}`);
//                 }, 2000);
//             }
//         });
//     }

//     withdraw(amount) {
//         return new Promise((resolve, reject) => {
//             if (isNaN(amount) || amount <= 0) {
//                 reject("Invalid withdraw amount");
//             } else {
//                 setTimeout(() => {
//                     if (amount <= this.balance) {
//                         this.balance -= amount;
//                         resolve(`Withdrawal of ${amount} successful. Current balance: ${this.balance}`);
//                     } else {
//                         reject("Insufficient funds");
//                     }
//                 }, 3000);
//             }
//         });
//     }
// }

// class Bank {
//     constructor() {
//         this.accounts = [];
//     }

//     addAccount(account) {
//         if (account instanceof BankAccount) {
//             this.accounts.push(account);
//         }
//     }

//     totalBalance() {
//         let total = 0;
//         for (let i = 0; i < this.accounts.length; i++) {
//             total += this.accounts[i].balance;
//         }
//         return `Total balance across all accounts: ${total}`;
//     }
// }

// class BankApp {
//     constructor() {
//         this.bank = new Bank();
//     }

//     async mainMenu() {
//         let repeat = true;
//         do {
//             let choice = window.prompt(`Select an option:
// 1. Deposit
// 2. Withdraw
// 3. Check balance
// 4. Exit`);
//             switch (+choice) {
//                 case 1:
//                     let depositAmount = window.prompt("Enter the amount to deposit");
//                     try {
//                         const depositResult = await this.bank.accounts[0].deposit(+depositAmount);
//                         console.log(depositResult);
//                     } catch (error) {
//                         console.log(error);
//                     }
//                     break;
//                 case 2:
//                     let withdrawAmount = window.prompt("Enter the amount to withdraw");
//                     try {
//                         const withdrawResult = await this.bank.accounts[0].withdraw(+withdrawAmount);
//                         console.log(withdrawResult);
//                     } catch (error) {
//                         console.log(error);
//                     }
//                     break;
//                 case 3:
//                     console.log(`Current balance: ${this.bank.accounts[0].balance}`);
//                     break;
//                 default:
//                     repeat = false;
//                     break;
//             }
//         } while (repeat);
//     }
// }

// let bankApp = new BankApp();
// let bankAccount = new BankAccount();
// bankApp.bank.addAccount(bankAccount);
// bankApp.mainMenu();

const rupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(value);
}

const myDisplayerSaldo = (value) => {
    value = rupiah(value);

    document.getElementById("saldo").innerHTML = value;
}

const modal = (style) => {
    document.getElementById("notif").style.display = style;
}

const notifMsg = (value, style) => {
    document.getElementById("notifMsg").innerHTML = value;
    document.getElementById("notif").style.backgroundColor = style;
}

class BankAccount {
    constructor(amount) {
        this.amount = amount;
        this.saldo = 0;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            amount = +amount;
            if (isNaN(amount)) {return reject("Masukan input yang sesuai");}
            
            setTimeout(() => {
                this.saldo += amount;
                myDisplayerSaldo(this.saldo);

                notifMsg("Deposit Berhasil!", "#22C55E");
                resolve({
                    message: "Deposit berhasil",
                    amount: amount,
                    saldo: this.saldo,
                });
            }, 1000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            amount = +amount;
            if (isNaN(amount)) {return reject("Masukan input yang sesuai");}

            if(this.saldo <= amount) {return reject(`Maaf saldo anda kurang dari ${amount}`)}

            setTimeout(() => {
                this.saldo -= amount;
                myDisplayerSaldo(this.saldo);

                notifMsg("Withdraw Berhail!", "#22C55E");
                resolve({
                    message: "Withdraw berhasil",
                    amount: amount,
                    saldo: this.saldo,
                });
            }, 1000);
        });
    }
}

// async function main() {
//     let bank = new BankAccount();
//     try {
//         const result = await bank.deposit(1001);
//         console.log(result);
//         console.log(bank);
//     } catch (error) {
//         console.error(`Error: ${error}`);
//     }

//     try {
//         const result = await bank.withdraw(1000);
//         console.log(result);
//         console.log(bank);
//     } catch (error) {
//         console.error(`Error: ${error}`);
//     }
// }

// main();

// do {
//     let pilih = window.prompt(`Pilih menu Bank
//         1. Tambah saldo
//         2. Kurang saldo
//         3. Cek saldo
//         4. Keluar
//         menu:`);

//     switch (+pilih) {
//         case 1:
//             let amount = window.prompt("Masukkan jumlah yang ingin ditambah");
//             bank.deposit(+amount);
//             console.log(bank);
//             break;
//         case 2:
//             let kurang = window.prompt("Masukkan jumlah yang ingin dikurang");
//             kurangSaldo(+kurang);
//             break;
//         case 3:
//             pengulangan(
//                 window.prompt(
//                 `Saldo saat ini RP ${saldo}\n\ningin kembali ke menu?(y/t) `
//                 )
//             );
//             break;
//         default:
//             ulang = false;
//             break;
//     }
// } while (ulang);
