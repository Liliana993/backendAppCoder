import Producto from "../models/productos.js";

class ProductoDao {

    async getProductos(filter = {}, options = {}) {
        return await Producto.paginate(filter, options);
    }

    async getProductById(pid) {
        return await Producto.findById(pid).lean();
    }

    async createProduct(productData) {
        return await Producto.create(productData);
    }

    async updateProduct(pid, productData) {
        return await Producto.findByIdAndUpdate(
            pid,
            productData,
            {
                new: true,
                runValidators: true
            }
        );
    }

    //DELETE
    async deleteProduct(pid) {
        return await Producto.findByIdAndDelete(pid);
    }
}

export default ProductoDao;