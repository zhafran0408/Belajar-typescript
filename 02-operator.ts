
/*
  MATERI 2: OPERATOR TYPESCRIPT

  Operator perbandingan menghasilkan true atau false.
  Operator logika digunakan untuk menggabungkan
  atau membalik kondisi.
*/

// 1. Operator perbandingan
console.log(5 === 5);  // true
console.log(5 !== 3);  // true
console.log(8 > 4);    // true
console.log(2 < 1);    // false
console.log(5 >= 5);   // true
console.log(3 <= 2);   // false

// 2. Operator AND (&&)
// True jika kedua kondisi true
console.log(true && true);   // true
console.log(true && false);  // false

// 3. Operator OR (||)
// True jika minimal satu kondisi true
console.log(true || false);  // true
console.log(false || false); // false

// 4. Operator NOT (!)
// Membalik nilai boolean
console.log(!true);  // false
console.log(!false); // true

// 5. Contoh gabungan operator
let age: number = 17;
let hasTicket: boolean = true;

console.log(age >= 17 && hasTicket); // true
console.log(age < 17 || hasTicket); // true
