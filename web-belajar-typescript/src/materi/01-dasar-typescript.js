"use strict";
/*
  ============================================================
  MATERI 1: DASAR TYPESCRIPT
  ============================================================
  Author  : Zhafran
  Lokasi  : sololearn/01-basics/
  Topik   : Output, Variabel, Tipe Data, let/const, Template String
  Sumber  : Sololearn + catatan pribadi

  CARA BACA FILE INI:
  - Baca komentar dulu, baru kodenya.
  - Tiap section ada analogi biar gampang nginget.
  - Coba ubah-ubah nilainya, liat apa yang terjadi.
  ============================================================
*/
// ============================================================
// 1. MENAMPILKAN OUTPUT — console.log()
// ============================================================
/*
  ANALOGI: Papan Pengumuman Sekolah.
  Apapun yang lo tulis di console.log(), bakal "diumumin"
  ke layar konsol. Semua orang (browser/terminal) bisa lihat.
*/
console.log("Halo, TypeScript!"); // string  → teks
console.log(100); // number  → angka
console.log(true); // boolean → true / false
// ============================================================
// 2. VARIABEL & TIPE DATA
// ============================================================
/*
  ANALOGI: Label di Kotak Barang di Gudang.
  TypeScript itu disiplin — tiap variabel WAJIB punya label tipe.
  Kalau isi kotak gak sesuai label → ditolak sebelum jalan.

    string  → kotak buat SURAT / OBAT     (teks)
    number  → kotak buat UANG             (angka)
    boolean → kotak SAKLAR LAMPU          (true / false)
*/
let username = "Zhafran";
let age = 17;
let isLearning = true;
console.log(username); // "Zhafran"
console.log(age); // 17
console.log(isLearning); // true
/*
  ❌ COBA INI (bakal error, hapus komentar buat lihat):
  let age: number = "Zhafran";
  → Error: kayak masukin baju ke kotak uang. Ditolak.
*/
// ============================================================
// 3. LET vs CONST
// ============================================================
/*
  ANALOGI:
    let   = PAPAN TULIS WHITEBOARD 🖊️  → bisa dihapus & ditulis ulang
    const = PRASASTI BATU 🪨          → sekali diukir, gak bisa diubah

  ATURAN PRAKTIS (dosen mode):
  - Default pakai const.
  - Baru ganti ke let kalau beneran butuh diubah.
  - Biar kode lo aman dari kesalahan "kepencet ubah".
*/
// --- let: papan tulis, boleh diubah ---
let score = 70;
score = 90; // ✅ hapus 70, tulis 90
console.log(score); // 90
// --- const: prasasti batu, gak boleh diubah ---
const country = "Indonesia";
// country = "Jepang";    // ❌ Error: prasasti gak bisa diukir ulang
console.log(country); // "Indonesia"
// ============================================================
// 4. TEMPLATE STRING
// ============================================================
/*
  ANALOGI: CETAKAN FORMULIR OTOMATIS ✨
  Backtick ` ` + ${...} = mesin cetak formulir.
  Lo tulis template-nya, mesin otomatis isi lubang ${...}
  dengan nilai variabel. Gak perlu ribet pakai + dan spasi manual.
*/
// --- Cara kuno (ribet) ---
console.log("Nama: " + username + ", Umur: " + age); // 😵 gampang typo
// --- Cara template string (bersih) ---
console.log(`Nama : ${username}`);
console.log(`Umur : ${age} tahun`);
console.log(`Nilai: ${score}`);
/*
  Kenapa lebih enak:
  - Gak perlu + dan spasi manual.
  - Bisa langsung hitung di dalam: ${age + 1}
  - Lebih kebaca dibanding string concat panjang.
*/
// ============================================================
// 🧠 RINGKASAN SATU KALIMAT (buat nginget cepat)
// ============================================================
/*
  console.log      → papan pengumuman
  tipe data        → label kotak barang
  let              → papan tulis  (bisa diubah)
  const            → prasasti batu (gak bisa diubah)
  template string  → formulir isian otomatis
*/
// ============================================================
// 🧪 MINI LATIHAN (coba isi sebelum lanjut Materi 2)
// ============================================================
/*
  TUGAS:
  1. Bikin variabel `namaSekolah` (string) pakai const.
  2. Bikin variabel `kelas` (number) pakai let.
  3. Ubah nilai `kelas` jadi 11.
  4. Print pakai template string:
       "Aku Zhafran dari <namaSekolah>, kelas <kelas>."
  5. Coba ubah `namaSekolah` → lihat error-nya, pahami kenapa.
*/
//# sourceMappingURL=01-dasar-typescript.js.map