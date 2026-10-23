/*
  ============================================================
  MATERI 4: LOOPS DAN LOGIC
  ============================================================
  Author  : Zhafran
  Lokasi  : sololearn/01-basics/
  Topik   : while, for, i++/i--, loop + if, modulo
  Sumber  : Sololearn + catatan pribadi

  CARA BACA FILE INI:
  - Loop = "ulangi terus selama ...".
  - Tiap contoh ada Output + Logic yang ditulis LANGKAH PER
    LANGKAH. Biasakan baca logic-nya, bukan cuma output.
  - Kalau bingung, jalanin manual di kertas: nilai i, kondisi,
    hasil. Itu cara paling ampuh.
  ============================================================
*/


// ============================================================
// 1. WHILE LOOP — "ULANGI SELAMA MASIH BENAR"
// ============================================================
/*
  ANALOGI: Mesin Cuci ⚙️
  Mesin terus muter SELAMA pintunya belum kebuka.
  Begitu kondisi jadi false → mesin berhenti.
  Gak tahu kapan berhentinya — tergantung kondisi.
*/
console.log("=== WHILE LOOP ===");

let n: number = 2;

while (n > 0) {
  console.log(n);
  n = n - 1;           // ← INI yang bikin loop bisa berhenti
}

// Output:
// 2
// 1

// Logic (jalanin di kepala):
// n=2 → 2>0 true  → cetak 2 → n=1
// n=1 → 1>0 true  → cetak 1 → n=0
// n=0 → 0>0 false → STOP


// ============================================================
// 2. MENGHINDARI INFINITE LOOP
// ============================================================
/*
  ANALOGI: Lift Nyangkut 🛗
  Kalau tombol lantai GAK PERNAH ditekan, lift terus naik.
  Sama kayak while: kalau variabel kondisi GAK PERNAH berubah,
  loop jalan selamanya → browser/terminal nge-hang.

  ⚠️ RULE: Setiap while WAJIB punya "jalan keluar"
  (perubahan variabel yang bikin kondisi akhirnya false).
*/
console.log("=== COUNTING ===");

let count: number = 1;

while (count <= 3) {
  console.log(count);
  count++;             // ← jalan keluar
}

// Output:
// 1
// 2
// 3

// Kalau `count++` dihapus → 1 1 1 1 1 ... INFINITE LOOP ❌


// ============================================================
// 3. DASAR FOR LOOP — "ULANGI DENGAN HITUNGAN"
// ============================================================
/*
  ANALOGI: Jadwal Latihan 3 Hari 📅
  Lo udah TAHU dari awal bakal 3 kali.
  Jadi pakai `for`: ada awal (hari 1), kondisi (sampai hari 3),
  dan langkah (tambah 1 hari tiap putaran).

  BEDA dengan while:
  - while → "ulangi SAMPAI kondisi false" (gak tahu berapa kali)
  - for   → "ulangi SEBANYAK N kali" (udah tahu batasnya)
*/
console.log("=== FOR LOOP ===");

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3

// Anatomi for — HA FAL INI:
//   for (AWAL ; KONDISI ; LANGKAH)
//        let i=1 ; i<=3 ; i++
//
//   AWAL    → dijalankan SEKALI di awal
//   KONDISI → dicek SEBELUM tiap putaran
//   LANGKAH → dijalankan SETELAH tiap putaran


// ============================================================
// 4. i++ DAN i-- (INCREMENT / DECREMENT)
// ============================================================
/*
  ANALOGI: Tangga 🪜
  i++ → naik 1 anak tangga
  i-- → turun 1 anak tangga

  Singkatan dari:
    i++   ≡  i = i + 1
    i--   ≡  i = i - 1
*/
console.log("=== INCREMENT ===");

let number: number = 1;
number++;              // 1 → 2
console.log(number);   // 2

console.log("=== DECREMENT ===");

number--;              // 2 → 1
console.log(number);   // 1


// ============================================================
// 5. MENGHITUNG JUMLAH PUTARAN — "OFF BY ONE" BUG
// ============================================================
/*
  ANALOGI: Hitung Anak Tangga 🪜
  Kalau lo mau naik 4 anak tangga, lo HITUNG 1,2,3,4.
  Tapi ada satu "lompatan" ke lantai berikutnya yang gak
  dihitung sebagai anak tangga — itu i=5.

  ⚠️ BUG PALING UMUM PEMULA: pakai <= vs <
*/
console.log("=== REPETITIONS ===");

for (let i = 1; i <= 4; i++) {
  console.log("go");
}

// Output:
// go
// go
// go
// go

// Dicetak 4 kali, BUKAN 5.
// Alasan: setelah i naik jadi 5, kondisi i <= 4 → false → STOP.
// i=5 itu "lompatan keluar", gak ikut dicetak.

/*
  ⚠️ TABEL CEPAT (biar gak salah hitung):
    for (i=1; i<=4; i++)  → cetak 4x  (1,2,3,4)
    for (i=1; i<4 ; i++)  → cetak 3x  (1,2,3)
    for (i=0; i<4 ; i++)  → cetak 4x  (0,1,2,3)
*/


// ============================================================
// 6. HITUNG MUNDUR
// ============================================================
/*
  ANALOGI: Countdown Roket 🚀
  Mulai dari 3, turun terus, baru "Liftoff!" setelah loop SELESAI.
*/
console.log("=== COUNTDOWN ===");

for (let t = 3; t > 0; t--) {
  console.log(t);
}

console.log("Liftoff!");   // ← di LUAR loop, jalan setelah for kelar

// Output:
// 3
// 2
// 1
// Liftoff!


// ============================================================
// 7. LOOP BERTEMU IF — "SETIAP PUTARAN DICEK ULANG"
// ============================================================
/*
  ANALOGI: Wasit Pertandingan 🏁
  Tiap ronde, wasit ngecek "skor >= 3?" dan kasih status.
  Pengecekan terjadi ULANG di setiap ronde — bukan sekali.
*/
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

// Logic per putaran:
// i=1 → 1>=3? false → low
// i=2 → 2>=3? false → low
// i=3 → 3>=3? true  → high
// i=4 → 4>=3? true  → high


// ============================================================
// 8. MEDALI PADA REPETISI TERAKHIR
// ============================================================
/*
  ANALOGI: Hadiah di Finis 🏅
  Cuma ronde TERAKHIR yang dapet medali.
  Caranya: cocokkan i dengan angka terakhir (5).
*/
console.log("=== FINAL REP ===");

for (let i = 1; i <= 5; i++) {
  if (i === 5) {
    console.log("Medal earned! 🏅");
  }
}

// Output:
// Medal earned! 🏅

// i===5 hanya true SEKALI, yaitu di putaran terakhir.
// Putaran 1-4: if gagal → gak ada output, tapi loop lanjut.


// ============================================================
// 9. MEMERIKSA ANGKA GENAP — OPERATOR MODULO (%)
// ============================================================
/*
  ANALOGI: Sisa Pembagian 🍕
  Bagi 8 potong pizza buat 2 orang → 4 orang, sisa 0.
  Bagi 7 potong buat 2 orang → 3 orang, sisa 1.

  i % 2 → sisa pembagian i dengan 2.
    i % 2 === 0 → GENAP (gak ada sisa)
    i % 2 === 1 → GANJIL (sisa 1)
*/
console.log("=== EVEN NUMBERS ===");

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Output:
// 2
// 4

// Logic per putaran:
// i=1 → 1%2=1 → ganjil, skip
// i=2 → 2%2=0 → GENAP ✅ cetak 2
// i=3 → 3%2=1 → ganjil, skip
// i=4 → 4%2=0 → GENAP ✅ cetak 4
// i=5 → 5%2=1 → ganjil, skip


// ============================================================
// 🧠 RINGKASAN LOGIC (inti materi 4)
// ============================================================
/*
  1. LOOP    → menentukan PENGULANGAN.
  2. KONDISI → menentukan loop TERUS JALAN atau STOP.
  3. PERUBAHAN VARIABEL (i++, i--) → mengatur perkembangan loop.
                ⚠️ Tanpa perubahan → INFINITE LOOP.
  4. IF di dalam loop → menentukan TINDAKAN per putaran.
  5. Kalau bingung → trace manual: tulis i, kondisi, hasil,
     satu baris per putaran. Itu cara paling ampuh.
*/


// ============================================================
// 🧪 MINI LATIHAN
// ============================================================
/*
  TUGAS 1 — Tebak output SEBELUM jalanin:
  for (let i = 1; i <= 3; i++) {
    if (i === 2) console.log("dua");
  }
  → Jawab: ?

  TUGAS 2 — Benerin infinite loop:
  let x = 5;
  while (x > 0) {
    console.log(x);
    // bug: gak ada yang ngubah x
  }
  Tambahin SATU baris biar loop berhenti di 1.

  TUGAS 3 — Cetak angka ganjil 1..9:
  Pakai for + if + modulo (%). Output: 1 3 5 7 9

  TUGAS 4 — Hitung total 1+2+3+...+5:
  let total = 0;
  for (let i = 1; i <= 5; i++) { total = total + i; }
  console.log(total);  // tebak dulu, baru jalanin
*/
