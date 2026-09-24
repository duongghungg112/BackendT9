import { Product } from "./product"
export class ShoppingCart {
    private items: { product: Product; quantity: number }[] = [];

    addToCart(product: Product, quantity: number): void {
        const existingItem = this.items.find(
            item => item.product.id === product.id
        );

        if (existingItem) {
            existingItem.quantity = existingItem.quantity + quantity;
        } else {
            this.items.push({
                product: product,
                quantity: quantity
            });
        }
    }

    getTotalPrice(): number {
        let total: number = 0;

        for (const item of this.items) {
            total = total + item.product.price * item.quantity;
        }

        return total;
    }
}