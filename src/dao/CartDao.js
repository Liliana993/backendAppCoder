import Cart from "../models/cart.js";
import Producto from "../models/productos.js";

class CartDao {

    async createCart() {
        return await Cart.create({
            products: []
        });
    }

    async getCartById(cid) {
    return await Cart.findById(cid).populate("products.product").lean();
}

async addProductToCart(cid, pid) {

    const cart = await Cart.findById(cid);

    if (!cart) {
        return null;
    }

    const product = await Producto.findById(pid);

    if (!product) {
        return "PRODUCT_NOT_FOUND";
    }

    const productIndex = cart.products.findIndex(
        item => item.product.toString() === pid
    );

    if (productIndex !== -1) {

        cart.products[productIndex].quantity += 1;

    } else {

        cart.products.push({
            product: pid,
            quantity: 1
        });

    }

    await cart.save();

    return cart;
}

async removeProductFromCart(cid, pid) {

    const cart = await Cart.findById(cid);

    if (!cart) {
        return null;
    }

    const exists = cart.products.some(
        item => item.product.toString() === pid
    );

    if (!exists) {
        return "PRODUCT_NOT_IN_CART";
    }

    cart.products = cart.products.filter(
        item => item.product.toString() !== pid
    );

    await cart.save();

    return cart;
}

async updateCart(cid, products) {

    const cart = await Cart.findById(cid);

    if (!cart) {
        return null;
    }

    cart.products = products;

    await cart.save();

    return cart;
}

async updateProductQuantity(cid, pid, quantity) {

    const cart = await Cart.findById(cid);

    if (!cart) {
        return null;
    }

    const product = cart.products.find(
        item => item.product.toString() === pid
    );

    if (!product) {
        return "PRODUCT_NOT_IN_CART";
    }

    product.quantity = quantity;

    await cart.save();

    return cart;
}

async clearCart(cid) {

    const cart = await Cart.findById(cid);

    if (!cart) {
        return null;
    }

    cart.products = [];

    await cart.save();

    return cart;
}

}

export default CartDao;