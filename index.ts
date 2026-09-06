import { Product } from "./src/types";
import { ShoppingCart } from "./src/cart";

// 1. Buat beberapa produk
const laptop: Product = { id: 1, name: "Laptop Gaming", price: 1500, category: "electronics" };
const mouse: Product = { id: 2, name: "Wireless Mouse", price: 50, category: "electronics" };

// 2. Inisialisasi Keranjang Belanja
const myCart = new ShoppingCart();

// 3. Tambahkan barang
myCart.addItem(laptop, 1);
myCart.addItem(mouse, 2); // Subtotal: 1500 + (50 * 2) = 1600

// 4. Hitung Total Akhir
const discountPercent = 10; // Diskon 10%
const subtotal = myCart.calculateSubtotal();
const grandTotal = myCart.calculateGrandTotal(discountPercent);

console.log("=== RINGKASAN BELANJA ===");
console.log(`Subtotal       : $${subtotal}`);
console.log(`Diskon (${discountPercent}%)   : -$${(subtotal * discountPercent) / 100}`);
console.log(`Total + Pajak  : $${grandTotal}`);