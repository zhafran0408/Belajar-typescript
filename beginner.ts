// ========================================
// TYPESCRIPT BEGINNER PRACTICE
// ========================================

// 1. STRING
const name: string = "Budi";

// 2. NUMBER
let age: number = 18;

// 3. BOOLEAN
const isOnline: boolean = true;

// 4. PRINT VARIABLES
console.log(name);
console.log(age);
console.log(isOnline);

// 5. MENGUBAH NILAI VARIABLE
age = 19;

console.log(age);

// 6. CONST
const birthYear: number = 2007;

console.log(birthYear);

// 7. TEMPLATE STRING
console.log(`Halo, nama saya ${name}.`);
console.log(`Umur saya ${age} tahun.`);

// 8. TEMPLATE STRING + MATH
const score: number = 80;
const bonus: number = 20;

console.log(`Total score: ${score + bonus}`);

// 9. COMPARISON
console.log(age > 17);
console.log(score === 80);

// 10. IF / ELSE
if (isOnline) {
  console.log(`${name} sedang online.`);
} else {
  console.log(`${name} sedang offline.`);
}

// 11. OPERASI MATEMATIKA
const a: number = 10;
const b: number = 5;

console.log(a + b); // tambah
console.log(a - b); // kurang
console.log(a * b); // kali
console.log(a / b); // bagi

// 12. STRING + VARIABLE
const city: string = "Jakarta";

console.log(`Saya tinggal di ${city}.`);

// 13. BOOLEAN
let gameOver: boolean = false;

console.log(`Game over: ${gameOver}`);

gameOver = true;

console.log(`Game over: ${gameOver}`);

// 14. PERBANDINGAN
console.log(10 > 5);
console.log(5 > 10);
console.log(10 === 10);
console.log(10 === 20);

// 15. IF / ELSE DENGAN PERBANDINGAN
if (age >= 18) {
  console.log("Kamu sudah 18 tahun atau lebih.");
} else {
  console.log("Kamu masih di bawah 18 tahun.");
}