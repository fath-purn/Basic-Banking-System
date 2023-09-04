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