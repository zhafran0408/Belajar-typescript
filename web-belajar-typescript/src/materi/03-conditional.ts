/*
  ============================================================
  MATERI 3: CONDITIONAL (PERCABANGAN)
  ============================================================
  Author  : Zhafran
  Lokasi  : sololearn/01-basics/
  Topik   : if, else if, else, gabung operator logika
  Sumber  : Sololearn + catatan pribadi

  CARA BACA FILE INI:
  - Conditional = "kalau ... maka ...".
  - TypeScript baca dari ATAS ke BAWAH, berhenti di kondisi
    PERTAMA yang true. Sisanya diabaikan.
  ============================================================
*/


// ============================================================
// 1. IF — "KALAU ... MAKA ..."
// ============================================================
/*
  ANALOGI: Satpam di Gerbang Sekolah 🚪
  Satpam cuma ngecek SATU syarat: "Nilai >= 60?".
  Kalau benar → silakan masuk (blok dijalankan).
  Kalau salah → diem aja, gak ngapa-ngapain.
*/
let score: number = 75;

if (score >= 60) {
  console.log("Lulus!");     // 75 >= 60 → true → dijalankan ✅
}


// ============================================================
// 2. IF + ELSE — "KALAU TIDAK, MAKA ..."
// ============================================================
/*
  ANALOGI: Nyawa di Game 🎮
  Kalau nyawa > 0 → game jalan.
  Kalau TIDAK (else) → game over.
  Dua-duanya PASTI salah satu jalan, gak mungkin dua-duanya.
*/
let lives: number = 0;

if (lives > 0) {
  console.log("Game masih berjalan.");
} else {
  console.log("Game Over."); // 0 > 0 → false → masuk else ✅
}


// ============================================================
// 3. IF + ELSE IF + ELSE — "TANGGA PERCABANGAN"
// ============================================================
/*
  ANALOGI: Tangga di Gedung 🪜
  Lo naik tangga dari BAWAH ke ATAS. Begitu nemu anak tangga
  pertama yang cocok, lo BERHENTI. Anak tangga di atasnya
  gak dicek lagi, walau sebenarnya cocok juga.

  Contoh: gradeScore = 85
    Cek 1: 85 >= 90 ? → false, lanjut
    Cek 2: 85 >= 80 ? → TRUE → cetak "Grade B", BERHENTI ✅
    (85 juga >= 70, tapi gak dicek karena udah berhenti di Grade B)
*/
let gradeScore: number = 85;

if (gradeScore >= 90) {
  console.log("Grade A");
} else if (gradeScore >= 80) {
  console.log("Grade B");     // ← berhenti di sini ✅
} else if (gradeScore >= 70) {
  console.log("Grade C");     // (gak dicek, udah berhenti)
} else {
  console.log("Grade D");
}

/*
  ⚠️ CATATAN PENTING (soal favorit UTS/UAS):
  URUTAN kondisi itu PENTING. Kalau lo tulis dari kecil ke
  besar, hasilnya bisa salah:

    if (gradeScore >= 70) console.log("C");
    else if (gradeScore >= 80) console.log("B"); // ❌ gak pernah kena
    else if (gradeScore >= 90) console.log("A");

    → 95 pun bakal dicetak "C", karena 95 >= 70 sudah true duluan.

  ATURAN: urutkan dari SYARAT PALING KETAT → PALING LONGGAR.
*/


// ============================================================
// 4. CONDITIONAL + OPERATOR LOGIKA
// ============================================================
/*
  ANALOGI: Syarat Naik Roller Coaster 🎢
  Boleh naik kalau umur cukup DAN bawa izin orang tua.
  Dua syarat itu digabung pakai && → dua-duanya harus true.
*/
let age: number = 17;
let hasPermission: boolean = true;

// age >= 17      → true
// hasPermission  → true
// true && true   → true ✅
if (age >= 17 && hasPermission) {
  console.log("Kondisi terpenuhi.");
} else {
  console.log("Kondisi belum terpenuhi.");
}


// ============================================================
// 🧠 RINGKASAN SATU KALIMAT (buat nginget cepat)
// ============================================================
/*
  if        → satpam gerbang (cek 1 syarat)
  else      → jalur alternatif kalau syarat gagal
  else if   → tangga percabangan (berhenti di anak tangga
              PERTAMA yang cocok)

  RULE OF THUMB:
  - Urutan kondisi: dari KETAT → LONGGAR.
  - Kalau butuh cek SEMUA kondisi (bukan berhenti di satu),
    itu bukan tugas if/else if — nanti pakai logika lain.
*/


// ============================================================
// 🧪 MINI LATIHAN
// ============================================================
/*
  TUGAS 1 — Tebak output sebelum jalanin:
  let n = 45;
  if (n >= 80)       console.log("A");
  else if (n >= 60)  console.log("B");
  else if (n >= 40)  console.log("C");
  else               console.log("D");
  → Jawab: ?

  TUGAS 2 — Benerin bug urutan:
  Kode berikut salah logika:
    if (nilai >= 70)   console.log("C");
    else if (nilai >= 80) console.log("B");
    else if (nilai >= 90) console.log("A");
  Tulis ulang biar benar.

  TUGAS 3 — Kasus nyata (tulis sendiri):
  Buat variabel:
    const punyaKTP  = true;
    const umur      = 16;
  Cetak "Boleh bikin SIM" kalau umur >= 17 DAN punyaKTP,
  selain itu cetak "Belum boleh bikin SIM".
*/

