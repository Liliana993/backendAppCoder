import CartService from "../services/CartService.js";

class CartController {

    constructor() {
        this.cartService = new CartService();
    }

    createCart = async (req, res) => {

        try {

            const cart = await this.cartService.createCart();

            res.status(201).json({
                status: "success",
                payload: cart
            });

        } catch (error) {

            res.status(500).json({
                status: "error",
                message: error.message
            });

        }

    };

    getCartById = async (req, res) => {
    try {

        const { cid } = req.params;

        const cart = await this.cartService.getCartById(cid);

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }
};

addProductToCart = async (req, res) => {

    try {

        const { cid, pid } = req.params;

        const cart = await this.cartService.addProductToCart(cid, pid);

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        if (cart === "PRODUCT_NOT_FOUND") {
            return res.status(404).json({
                status: "error",
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }

};

removeProductFromCart = async (req, res) => {

    try {

        const { cid, pid } = req.params;

        const cart = await this.cartService.removeProductFromCart(cid, pid);

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        if (cart === "PRODUCT_NOT_IN_CART") {
            return res.status(404).json({
                status: "error",
                message: "El producto no existe en el carrito"
            });
        }

        res.status(200).json({
            status: "success",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }

};

updateCart = async (req, res) => {

    try {

        const { cid } = req.params;
        const { products } = req.body;

        if (!Array.isArray(products)) {
    return res.status(400).json({
        status: "error",
        message: "El campo products debe ser un arreglo."
    });
}

        const cart = await this.cartService.updateCart(cid, products);

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }

};

updateProductQuantity = async (req, res) => {

    try {

        const { cid, pid } = req.params;
        const { quantity } = req.body;

        if (quantity < 1) {
            return res.status(400).json({
                status: "error",
                message: "La cantidad debe ser mayor a cero."
            });
        }

        const cart = await this.cartService.updateProductQuantity(
            cid,
            pid,
            quantity
        );

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        if (cart === "PRODUCT_NOT_IN_CART") {
            return res.status(404).json({
                status: "error",
                message: "Producto no encontrado en el carrito"
            });
        }

        res.status(200).json({
            status: "success",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }

};

clearCart = async (req, res) => {

    try {

        const { cid } = req.params;

        const cart = await this.cartService.clearCart(cid);

        if (!cart) {
            return res.status(404).json({
                status: "error",
                message: "Carrito no encontrado"
            });
        }

        res.status(200).json({
            status: "success",
            message: "Carrito vaciado correctamente",
            payload: cart
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }

};

}

export default CartController;