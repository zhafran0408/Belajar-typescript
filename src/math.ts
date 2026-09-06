// Menghitung pajak berdasarkan total harga
export function calculateTax(amount: number, taxRatePercent: number = 10): number {
  return (amount * taxRatePercent) / 100;
}

// Menghitung harga potongan diskon
export function calculateDiscount(amount: number, discountPercent: number): number {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Diskon harus berada di antara 0 dan 100%");
  }
  return (amount * discountPercent) / 100;
}