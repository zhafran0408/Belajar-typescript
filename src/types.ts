export interface Product{
    id: number;
    name: string;
    price: number;
    category: "electronics"| "food"| "clothing"; // union type 
}

// Struktur data untuk Item di Keranjang
export interface CartItem{
    product: Product;
    quantity: number;
}