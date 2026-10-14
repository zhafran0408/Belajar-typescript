
/*
  MATERI 1: DASAR TYPESCRIPT

  console.log() digunakan untuk menampilkan output.
  string = teks
  number = angka
  boolean = true atau false
*/

// 1. Menampilkan output
console.log("Halo, TypeScript!");
console.log(100);
console.log(true);

// 2. Variabel dan tipe data
let username: string = "Zhafran";
let age: number = 17;
let isLearning: boolean = true;

console.log(username);
console.log(age);
console.log(isLearning);

// 3. Perbedaan let dan const
let score: number = 70;
score = 90; // let boleh diubah

const country: string = "Indonesia";
// country = "Jepang"; // Error: const tidak boleh di-assign ulang

console.log(score);
console.log(country);

// 4. Template string
console.log(`Nama: ${username}`);
console.log(`Umur: ${age} tahun`);
console.log(`Nilai: ${score}`);
