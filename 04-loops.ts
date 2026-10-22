
/*
==================================================
MATERI 4: LOOPS DAN LOGIC
==================================================

Loop:
- while: mengulang selama kondisi true.
- for: mengulang dengan nilai awal, kondisi, dan perubahan.

i++ : menambah nilai i sebanyak 1.
i-- : mengurangi nilai i sebanyak 1.
*/

// --------------------------------------------------
// 1. WHILE LOOP
// --------------------------------------------------

console.log("=== WHILE LOOP ===");

let n: number = 2;

while (n > 0) {
  console.log(n);
  n = n - 1;
}

// Output:
// 2
// 1

// Logic:
// n = 2 -> kondisi true -> cetak 2
// n = 1 -> kondisi true -> cetak 1
// n = 0 -> kondisi false -> berhenti


// --------------------------------------------------
// 2. MENGHINDARI INFINITE LOOP
// --------------------------------------------------

console.log("=== COUNTING ===");

let count: number = 1;

while (count <= 3) {
  console.log(count);
  count++;
}

// Output:
// 1
// 2
// 3

// count harus berubah supaya loop bisa berhenti.
// Jika count tidak berubah, kondisi bisa terus true.


// --------------------------------------------------
// 3. DASAR FOR LOOP
// --------------------------------------------------

console.log("=== FOR LOOP ===");

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3

// let i = 1 -> nilai awal
// i <= 3   -> kondisi loop
// i++      -> tambah 1 setiap putaran


// --------------------------------------------------
// 4. i++ DAN i--
// --------------------------------------------------

console.log("=== INCREMENT ===");

let number: number = 1;
number++;
console.log(number); // 2

console.log("=== DECREMENT ===");

number--;
console.log(number); // 1


// --------------------------------------------------
// 5. MENGHITUNG JUMLAH PUTARAN
// --------------------------------------------------

console.log("=== REPETITIONS ===");

for (let i = 1; i <= 4; i++) {
  console.log("go");
}

// Output:
// go
// go
// go
// go

// Dicetak 4 kali, bukan 5 kali.
// Setelah i menjadi 5, kondisi i <= 4 false.


// --------------------------------------------------
// 6. HITUNG MUNDUR
// --------------------------------------------------

console.log("=== COUNTDOWN ===");

for (let t = 3; t > 0; t--) {
  console.log(t);
}

console.log("Liftoff!");

// Output:
// 3
// 2
// 1
// Liftoff!


// --------------------------------------------------
// 7. LOOP BERTEMU IF
// --------------------------------------------------

console.log("=== LOOP WITH IF ===");

for (let i = 1; i <= 4; i++) {
  if (i >= 3) {
    console.log("high");
  } else {
    console.log("low");
  }
}

// Output:
// low
// low
// high
// high

// if diperiksa ulang di setiap putaran.
// i = 1 -> low
// i = 2 -> low
// i = 3 -> high
// i = 4 -> high


// --------------------------------------------------
// 8. MEDALI PADA REPETISI TERAKHIR
// --------------------------------------------------

console.log("=== FINAL REP ===");

for (let i = 1; i <= 5; i++) {
  if (i === 5) {
    console.log("Medal earned! 🏅");
  }
}

// Output:
// Medal earned! 🏅

// Kondisi i === 5 hanya true pada repetisi terakhir.


// --------------------------------------------------
// 9. MEMERIKSA ANGKA GENAP
// --------------------------------------------------

console.log("=== EVEN NUMBERS ===");

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Output:
// 2
// 4

// % menghasilkan sisa pembagian.
// i % 2 === 0 berarti i adalah angka genap.


// --------------------------------------------------
// 10. RINGKASAN LOGIC
// --------------------------------------------------

// 1. Loop menentukan pengulangan.
// 2. Kondisi menentukan apakah loop terus berjalan.
// 3. Perubahan variabel mengatur perkembangan loop.
// 4. if menentukan tindakan pada setiap putaran.
// 5. Periksa nilai variabel satu per satu jika bingung.
