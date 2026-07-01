import ProductService from '../services/ProductService.js';
import { getIO } from '../socket/index.js';

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    //GET-ALL
    getProductos = async (req, res) => {
        try {
            const result = await this.productService.getProductos(req.query);

            res.status(200).json(result);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message: error.message
            });

        }
    };

    //GET-ID
    getProductById = async (req, res) => {
    try {
        const { pid } = req.params;

        const product = await this.productService.getProductById(pid);

        if (!product) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: "success",
            payload: product
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

//CREATE
createProduct = async (req, res) => {
    try {
        const productData = req.body;

        const newProduct = await this.productService.createProduct(productData);

        const products = await this.productService.getProductos({});

        const io = getIO();
        io.emit("productsUpdated", products.payload);

        res.status(201).json({
            status: "success",
            payload: newProduct
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

//UPDATE
updateProduct = async (req, res) => {
    try {

        const { pid } = req.params;
        const productData = req.body;
        delete productData._id;

        const updatedProduct = await this.productService.updateProduct(pid, productData);

        if (!updatedProduct) {
            return res.status(404).json({
                status: "error",
                message: "Producto no encontrado"
            });
        }

        const products = await this.productService.getProductos({});

         const io = getIO();
         io.emit("productsUpdated", products.payload);

        res.status(200).json({
            status: "success",
            payload: updatedProduct
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }
};

//DELETE
deleteProduct = async (req, res) => {
    try {

        const { pid } = req.params;

        const deletedProduct = await this.productService.deleteProduct(pid);

        if (!deletedProduct) {
            return res.status(404).json({
                status: "error",
                message: "Producto no encontrado"
            });
        }

        const products = await this.productService.getProductos({});

        const io = getIO();
        io.emit("productsUpdated", products.payload);

        res.status(200).json({
            status: "success",
            message: "Producto eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            status: "error",
            message: error.message
        });

    }
};

}

export default ProductController;