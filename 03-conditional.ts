
/*
  MATERI 3: CONDITIONAL

  if        = dijalankan jika kondisi true
  else if   = memeriksa kondisi alternatif
  else      = dijalankan jika kondisi sebelumnya false
*/

// 1. if
let score: number = 75;

if (score >= 60) {
  console.log("Lulus!");
}

// 2. if dan else
let lives: number = 0;

if (lives > 0) {
  console.log("Game masih berjalan.");
} else {
  console.log("Game Over.");
}

// 3. if, else if, dan else
let gradeScore: number = 85;

if (gradeScore >= 90) {
  console.log("Grade A");
} else if (gradeScore >= 80) {
  console.log("Grade B");
} else if (gradeScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// 4. Conditional dengan operator logika
let age: number = 17;
let hasPermission: boolean = true;

if (age >= 17 && hasPermission) {
  console.log("Kondisi terpenuhi.");
} else {
  console.log("Kondisi belum terpenuhi.");
}

