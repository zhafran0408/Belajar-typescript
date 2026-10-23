/*
  ============================================================
  MATERI 2: OPERATOR TYPESCRIPT
  ============================================================
  Author  : Zhafran
  Lokasi  : sololearn/01-basics/
  Topik   : Operator Perbandingan, Logika (&&, ||, !)
  Sumber  : Sololearn + catatan pribadi

  CARA BACA FILE INI:
  - Operator perbandingan → hasilnya SELALU true / false.
  - Operator logika       → gabungin / balik kondisi.
  - Coba ubah angkanya, tebak hasilnya dulu, baru jalankan.
  ============================================================
*/


// ============================================================
// 1. OPERATOR PERBANDINGAN
// ============================================================
/*
  ANALOGI: Juri Pertandingan ⚖️
  Operator perbandingan itu kayak juri — dia cuma jawab
  "BENAR (true)" atau "SALAH (false)". Gak ada jawaban lain.

    ===  sama persis (nilai + tipe)
    !==  tidak sama
    >    lebih besar
    <    lebih kecil
    >=   lebih besar atau sama
    <=   lebih kecil atau sama
*/
console.log(5 === 5);  // true   → 5 memang sama dengan 5
console.log(5 !== 3);  // true   → 5 memang beda dengan 3
console.log(8 > 4);    // true   → 8 memang lebih besar dari 4
console.log(2 < 1);    // false  → 2 tidak lebih kecil dari 1
console.log(5 >= 5);   // true   → 5 sama dengan 5 (kena tanda >=)
console.log(3 <= 2);   // false  → 3 tidak lebih kecil/sama dengan 2

/*
  ⚠️ CATATAN PENTING (yang sering bikin bug):
  - `==`  → sama nilainya SAJA (longgar, ada auto-convert tipe)
  - `===` → sama nilai DAN tipe (ketat) ← SELALU PAKAI INI

  Contoh jebakan:
  console.log(5 == "5");   // true   ← 😱 karena "5" dikonversi
  console.log(5 === "5");  // false  ← ✅ aman, beda tipe
*/


// ============================================================
// 2. OPERATOR AND (&&) — "DAN"
// ============================================================
/*
  ANALOGI: Syarat Masuk Bioskop 🎬
  Lo boleh masuk kalau BIKIN SYARAT ITU DUA-DUANYA terpenuhi.
  Satu aja gagal → gak boleh masuk.

  ATURAN:  true && true   → true
           selain itu     → false
*/
console.log(true && true);   // true   → dua-duanya lolos ✅
console.log(true && false);  // false  → satu gagal ❌

/*
  Analogi nyata:
  const bawaTiket  = true;
  const cukupUmur = false;
  console.log(bawaTiket && cukupUmur); // false → gak boleh masuk
*/


// ============================================================
// 3. OPERATOR OR (||) — "ATAU"
// ============================================================
/*
  ANALOGI: Promo "Beli 1 GRATIS 1" 🎁
  Lo dapet promo kalau MINIMAL SATU syarat terpenuhi.
  Dua-duanya gagal → baru gak dapet.

  ATURAN:  false || false  → false
           selain itu      → true
*/
console.log(true || false);   // true   → satu lolos, cukup ✅
console.log(false || false);  // false  → dua-duanya gagal ❌


// ============================================================
// 4. OPERATOR NOT (!) — "BUKAN"
// ============================================================
/*
  ANALOGI: Saklar Lampu 💡
  Nilai boolean itu kayak saklar: true = ON, false = OFF.
  Tanda ! itu TANGAN yang NEKAN SAKLAR → kebalikin kondisinya.

    !true   → false  (lampu nyala, dipencet → mati)
    !false  → true   (lampu mati, dipencet → nyala)
*/
console.log(!true);   // false
console.log(!false);  // true

/*
  Sering dipakai buat cek "belum":
  let sudahLogin = false;
  console.log(!sudahLogin); // true → "belum login"
*/


// ============================================================
// 5. CONTOH GABUNGAN OPERATOR
// ============================================================
/*
  Kasus: Syarat Nonton Film 17+
  Boleh masuk kalau: umur >= 17 DAN bawa tiket.
*/
let age: number = 17;
let hasTicket: boolean = true;

// --- Gabungan AND ---
// umur >= 17  → true
// hasTicket   → true
// true && true → true ✅
console.log(age >= 17 && hasTicket);   // true


// --- Gabungan OR ---
// umur < 17   → false
// hasTicket   → true
// false || true → true ✅ (cukup satu yang lolos)
console.log(age < 17 || hasTicket);    // true


// ============================================================
// 🧠 RINGKASAN SATU KALIMAT (buat nginget cepat)
// ============================================================
/*
  ===  → juri pertandingan (jawab true/false)
  &&   → syarat masuk bioskop (DUA-DUANYA harus true)
  ||   → promo beli 1 gratis 1 (SATU aja cukup true)
  !    → saklar lampu (kebalikin nilai boolean)

  URUTAN EKSEKUSI (kalau digabung):
  ! dulu → && → terakhir ||
  Mau aman? Pakai tanda kurung: (a && b) || c
*/


// ============================================================
// 🧪 MINI LATIHAN
// ============================================================
/*
  TUGAS (tebak dulu hasilnya, baru tulis di kode):
  1. console.log(10 > 5 && 3 < 1);
  2. console.log(10 > 5 || 3 < 1);
  3. console.log(!(10 > 5));
  4. console.log(5 === "5");
  5. console.log(5 == "5");

  BONUS — kasus nyata:
  Buat variabel:
    const sudahIsiForm = true;
    const sudahBayar   = false;
  Cetak: "Boleh ikut ujian?" pakai && (harus dua-duanya).
*/
