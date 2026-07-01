import CartDao from "../dao/CartDao.js";

class CartService {

    constructor() {
        this.cartDao = new CartDao();
    }

    async createCart() {
        return await this.cartDao.createCart();
    }

    async getCartById(cid) {
    return await this.cartDao.getCartById(cid);
}

async addProductToCart(cid, pid) {
    return await this.cartDao.addProductToCart(cid, pid);
}

async removeProductFromCart(cid, pid) {
    return await this.cartDao.removeProductFromCart(cid, pid);
}

async updateCart(cid, products) {
    return await this.cartDao.updateCart(cid, products);
}

async updateProductQuantity(cid, pid, quantity) {
    return await this.cartDao.updateProductQuantity(cid, pid, quantity);
}

async clearCart(cid) {
    return await this.cartDao.clearCart(cid);
}

}

export default CartService;