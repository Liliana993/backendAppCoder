import { Router } from "express";
import ProductService from "../../services/ProductService.js";
import CartService from "../../services/CartService.js";

const router = Router();

const productService = new ProductService();
const cartService = new CartService();


router.get("/products", async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const result = await productService.getProductos({ page, limit });

        res.render("products", {
            products: result.payload,
            page: result.page,
            totalPages: result.totalPages,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevPage: result.prevPage,
            nextPage: result.nextPage
        });

    } catch (error) {
        next(error);
    }
});

router.get("/products/:pid", async (req, res, next) => {
    try {

        const product = await productService.getProductById(req.params.pid);

        const cartId = "6a4111b754fea3e64c4953e3";

        res.render("productDetail", {
            product,
            cartId
        });

    } catch (error) {
        next(error);
    }
});

router.get("/carts/:cid", async (req, res, next) => {
    try {

        const cart = await cartService.getCartById(req.params.cid);

        if (!cart) {
            return res.status(404).send("Carrito no encontrado");
        }

        res.render("cart", { cart });

    } catch (error) {
        next(error);
    }
});

router.get("/realtimeproducts", async (req, res, next) => {
    try {

        const result = await productService.getProductos({});

        res.render("realTimeProducts", {
            products: result.payload
        });

    } catch (error) {
        next(error);
    }
});

export default router;