import { Router } from "express";
import CartController from "../../controllers/CartController.js";

const router = Router();

const cartController = new CartController();

router.post("/", cartController.createCart);
router.get("/:cid", cartController.getCartById);
router.post("/:cid/products/:pid", cartController.addProductToCart);
router.delete("/:cid/products/:pid", cartController.removeProductFromCart);
router.put("/:cid", cartController.updateCart);
router.put("/:cid/products/:pid", cartController.updateProductQuantity);
router.delete("/:cid", cartController.clearCart);

export default router;