let saldo = 0;

let ulang = true;

function tambahSaldo(tambah) {
  saldo += tambah;
  pengulangan(
    window.prompt(`Saldo berhasil ditambahkan sejumlah RP ${tambah}\nSaldo anda sekarang Rp ${saldo}\n\ningin kembali ke menu?(y/t) `)
  );
}

function kurangSaldo(kurang) {
  saldo -= kurang;
  pengulangan(
    window.prompt(`Saldo berhasil dikurang sejumlah RP ${kurang}\nSaldo anda sekarang Rp ${saldo}\n\ningin kembali ke menu?(y/t) `)
  );
}

function pengulangan(ya) {
  if (ya !== "y") {
    ulang = false;
  }
}

do {
  let pilih = window.prompt(`Pilih menu Bank
    1. Tambah saldo
    2. Kurang saldo
    3. Cek saldo
    4. Keluar
    menu:`);

  switch (+pilih) {
    case 1:
      let tambah = window.prompt("Masukkan jumlah yang ingin ditambah");
      tambahSaldo(+tambah);
      break;
    case 2:
      let kurang = window.prompt("Masukkan jumlah yang ingin dikurang");
      kurangSaldo(+kurang);
      break;
    case 3:
      pengulangan(
      window.prompt(`Saldo saat ini RP ${saldo}\n\ningin kembali ke menu?(y/t) `));
      break;
    default:
      ulang = false;
      break;
  }
} while(ulang);