import { CartItem, Product } from "./types";
import { calculateDiscount, calculateTax } from "./math";

export class ShoppingCart {
  private items: CartItem[] = [];

  // Menambahkan produk ke keranjang
  addItem(product: Product, quantity: number): void {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  // Menhitung Total Kategori Produk & Harga
  calculateSubtotal(): number {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  // Hitung Total Akhir (Subtotal - Diskon + Pajak)
  calculateGrandTotal(discountPercent: number = 0): number {
    const subtotal = this.calculateSubtotal();
    const discount = calculateDiscount(subtotal, discountPercent);
    const tax = calculateTax(subtotal - discount);
    
    return subtotal - discount + tax;
  }

  getItems(): CartItem[] {
    return this.items;
  }
}