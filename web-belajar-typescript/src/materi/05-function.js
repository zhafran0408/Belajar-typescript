"use strict";
/*
  ============================================================
  MATERI 5: FUNCTION TYPESCRIPT
  ============================================================
  Author  : Zhafran
  Lokasi  : sololearn/02-functions/
  Topik   : function, parameter, return, void, string method
  Sumber  : Sololearn + catatan pribadi

  Jalankan: npx tsx 05-function.ts

  CARA BACA FILE INI:
  - Function = "resep masakan bernama" — bikin sekali,
    dipakai berkali-kali.
  - Baca dulu komentar ANALOGI, baru kodenya.
  - Perhatiin beda console.log vs return. Itu inti materi.
  ============================================================
*/
// ============================================================
// 1. FUNCTION — "RESEP BERNama"
// ============================================================
/*
  ANALOGI: Resep Masakan 🍜
  Resep ditulis SEKALI di buku resep. Tiap kali mau makan,
  lo tinggal "panggil" resepnya — gak perlu nulis ulang.

  - function sayHello() {...}  → nulis resep
  - sayHello()                 → masak (panggil resepnya)
*/
function sayHello() {
    console.log("Halo, bro!");
}
sayHello(); // masak ke-1
sayHello(); // masak ke-2
// ============================================================
// 2. PARAMETER — "BAHAN MASUKAN"
// ============================================================
/*
  ANALOGI: Resep dengan Bahan 🥕
  Resep yang sama bisa jadi masakan beda tergantung bahan.
  Parameter = lubang isian bahan resep.

  function announce(title: string) → bahan harus TEKS
*/
function announce(title) {
    console.log(title);
}
announce("Dune");
announce("Interstellar");
// ============================================================
// 3. PARAMETER NUMBER — "TIPE INPUT DICEK"
// ============================================================
/*
  ANALOGI: Resep yang GAK BOLEH salah bahan 🚫
  Resep sup butuh air, kalau lo kasih bensin → ditolak.
  TypeScript nolak input yang tipenya salah SEBELUM jalan.
*/
function showAge(age) {
    console.log(`Umur: ${age}`);
}
showAge(18);
// ❌ COBA (bakal error):
// showAge("delapan belas");
// → Error: Argument of type 'string' is not assignable to 'number'
// ============================================================
// 4. RETURN — "HASIL MASAKAN DISERAHKAN"
// ============================================================
/*
  ANALOGI: Koki vs Pramusaji 🍽️
  - console.log  = PRAMUSAJI  → cuma NAMPILIN, gak ngasih apa-apa
  - return       = KOKI       → MENGEMBALIKAN hasil ke pemesan

  ⚠️ INI BEDA PALING PENTING DI MATERI INI:
  - console.log → tampil di layar, tapi GAK bisa dipakai lagi
  - return      → hasilnya BISA disimpan & diolah lagi
*/
function getScore() {
    return 100; // ← hasil 100 "diserahkan" ke pemanggil
}
const score = getScore(); // ← ditangkap di variabel
console.log("Skor:", score);
// ============================================================
// 5. HASIL RETURN BISA DISIMPAN & DIPAKAI LAGI
// ============================================================
/*
  ANALOGI: Bahan Setengah Jadi 🧅
  Koki ngasih bawang goreng setengah jadi. Nanti bisa dipakai
  buat nasi goreng, soto, atau apapun.
*/
function getNumber() {
    return 7;
}
const numberFromFunction = getNumber();
console.log(numberFromFunction + 3); // 10 → bisa dihitung lagi
// ============================================================
// 6. INPUT → OLAH → OUTPUT — POLA DASAR FUNCTION
// ============================================================
/*
  ANALOGI: Mesin Blender 🥤
  Masukin buah (input) → diblender (proses) → keluar jus (output).

  function double(n) → masuk 5 → kali 2 → keluar 10.
*/
function double(n) {
    return n * 2;
}
const doubled = double(5);
console.log("Hasil double:", doubled); // 10
// ============================================================
// 7. DIPANGGIL BERKALI-KALI DENGAN INPUT BEDA
// ============================================================
/*
  ANALOGI: Tukang Foto 📷
  Kamera yang sama, foto beda orang → hasil beda.
*/
function greet(name) {
    console.log(`Halo, ${name}!`);
}
greet("Budi");
greet("Andi");
greet("Rina");
// ============================================================
// 8. FUNCTION DENGAN DUA PARAMETER
// ============================================================
/*
  ANALOGI: Mesin ATM 💳
  Butuh DUA input: kartu + PIN. Kalau salah satu kurang → gagal.
  Urutan parameter juga penting — kartu dulu, PIN kemudian.
*/
function tambah(a, b) {
    return a + b;
}
const hasilTambah = tambah(3, 5);
console.log("Hasil tambah:", hasilTambah); // 8
/*
  ⚠️ URUTAN PARAMETER PENTING:
  tambah(3, 5) → 8
  tambah(5, 3) → 8 (sama, karena tambah komutatif)
  Tapi kalau fungsinya `kurang(a, b)`, urutan jadi BEDA hasilnya.
*/
// ============================================================
// 9. METHOD & PROPERTY PADA STRING
// ============================================================
/*
  ANALOGI: String = Kotak Perkakas 🧰
  String punya "alat" bawaan yang bisa dipakai:
  - METHOD → ALAT (butuh tanda kurung, kayak palu buat mukul)
  - PROPERTY → SIFAT (gak butuh kurung, kayak warna kotak)

  toUpperCase()  → METHOD   (pakai kurung)
  length         → PROPERTY (tanpa kurung)
*/
// METHOD: pakai kurung
const word = "hello";
console.log(word.toUpperCase()); // HELLO
console.log(word); // hello (ASLI GAK BERUBAH)
/*
  ⚠️ PENTING: String di JS/TS itu IMMUTABLE (gak bisa diubah).
  toUpperCase() bikin string BARU, bukan ngubah `word`.
  Analogi: fotokopian — lo warna-in fotokopian, aslinya tetap.
*/
// PROPERTY: tanpa kurung
const username = "sam";
console.log(username.length); // 3
// ============================================================
// 10. METHOD/PROPERTY PADA HASIL METHOD — CHAINING
// ============================================================
/*
  ANALOGI: Sambungin Alat 🔗
  Hasil toUpperCase() itu string baru → dia juga punya .length.
  Jadi bisa disambung.
*/
const title = "dune".toUpperCase();
console.log(title); // DUNE
console.log(title.length); // 4
// ============================================================
// 11. RETURN WAJIB DIISI (kalau tipe hasil bukan void)
// ============================================================
/*
  ANALOGI: Janji Koki 🍳
  Kalau lo bilang "pesanan ini hasilnya number", lo WAJIB
  beneran ngasih number. Gak boleh kosong.

  function X(): number { return 0; }   ✅
  function X(): number { }             ❌ error
*/
function square(n) {
    return n * n;
}
console.log("Kuadrat 4:", square(4)); // 16
// ============================================================
// 12. POLA SINTAKS FUNCTION
// ============================================================
/*
  function namaFunction(parameter: tipe): tipeHasil {
    return nilai;
  }

  BONGKAR SATU-SATU:
  - function       → bikin function
  - parameter      → nama input (bebas, misal n, a, title)
  - : tipe         → tipe input (string, number, ...)
  - : tipeHasil    → tipe yang DIKEMBALIKAN oleh return
  - return         → nilai yang diserahkan ke pemanggil
  - void           → tanda "gak ngembaliin apa-apa"
  - namaFunction() → cara memanggil function
*/
// Contoh void (gak ada return):
function printHello() {
    console.log("Hello"); // ← cuma nampilin, gak return
}
// Contoh number (ada return):
function getZero() {
    return 0; // ← WAJIB ada return
}
// ============================================================
// 13. MINI LATIHAN (dari catatan lo)
// ============================================================
/*
  ANALOGI: Isi Bensin ⛽
  Mesin nambah 50 liter ke tank. Input 100 → output 150.
*/
function boost(fuel) {
    return fuel + 50;
}
const total = boost(100);
console.log("Total fuel:", total); // 150
// ============================================================
// 🧠 RINGKASAN SATU KALIMAT (buat nginget cepat)
// ============================================================
/*
  1. Function         → resep bernama, dibuat sekali, dipanggil berkali-kali.
  2. Parameter        → lubang isian bahan (input).
  3. TypeScript       → NOLAK input yang tipenya salah sebelum jalan.
  4. return           → KOKI yang serahin hasil ke pemanggil.
  5. console.log      → PRAMUSAJI yang cuma nampilin.
  6. Hasil return     → bisa disimpan di variabel & dipakai lagi.
  7. void             → tanda "gak ngembaliin apa-apa".
  8. Method           → pakai kurung (toUpperCase(), length? no).
  9. Property         → TANPA kurung (length).
  10. String immutable → method bikin string BARU, asli tetap.
*/
// ============================================================
// ⚠️ TABEL CEPAT: return vs console.log
// ============================================================
/*
  Aksi              | Efek di layar | Bisa dipakai lagi?
  ------------------|---------------|-------------------
  console.log(x)    | nampilin x    | ❌ tidak
  return x          | gak nampilin  | ✅ ya

  ⚠️ Kesalahan pemula:
  function tambah(a,b) {
    console.log(a + b);        // ❌ nampilin, tapi return undefined
  }
  const x = tambah(2,3);       // x = undefined 😱

  Bener:
  function tambah(a,b) {
    return a + b;              // ✅
  }
  const x = tambah(2,3);       // x = 5 ✅
*/
// ============================================================
// 🧪 MINI LATIHAN (coba sebelum lanjut)
// ============================================================
/*
  TUGAS 1 — Tebak output SEBELUM jalanin:
  function f(x: number): number {
    console.log(x * 2);
  }
  const r = f(4);
  console.log(r);

  → Jawab: ? (perhatiin: f pakai console.log, BUKAN return)

  TUGAS 2 — Benerin bug:
  function kurang(a: number, b: number): number {
    console.log(a - b);           // ❌ kenapa salah?
  }
  const hasil = kurang(10, 3);
  console.log(hasil);             // tebak apa yang keluar

  TUGAS 3 — Buat function sendiri:
  - Nama: `kaliDua`
  - Parameter: `n: number`
  - Return: `n * 2`
  - Panggil dengan 7, cetak hasilnya pakai console.log.

  TUGAS 4 — Chain method & property:
  Diketahui: const kata: string = "typescript";
  Cetak panjang dari `kata` yang udah di-uppercase.
  (Petunjuk: kata.toUpperCase().length)
*/ 
//# sourceMappingURL=05-function.js.map