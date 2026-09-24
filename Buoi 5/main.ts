import { Product } from "./product";
import { ShoppingCart } from "./cart";

const iphone = new Product("P01", "iPhone", 1000);
const headphone = new Product("P02", "Tai nghe", 100);
const phoneCase = new Product("P03", "Ốp lưng", 20);

const shoppingCart = new ShoppingCart();

shoppingCart.addToCart(iphone, 1);
shoppingCart.addToCart(headphone, 2);
shoppingCart.addToCart(phoneCase, 3);


shoppingCart.addToCart(iphone, 2);

console.log("Tổng tiền:", shoppingCart.getTotalPrice());