import ProductoDao from '../dao/ProductoDao.js';

class ProductService{
    constructor (){
        this.productoDao = new ProductoDao();
    }

    //GET-ALL
    async getProductos(queryParams) {

    const {
        limit = 10,
        page = 1,
        sort,
        query
    } = queryParams;

    const filter = {};

    if (query) {

        if (query === "true" || query === "false") {
            filter.status = query === "true";
        } else {
            filter.category = query;
        }

    }

    let sortOption = {};

    if (sort === "asc") {
        sortOption.price = 1;
    } else if (sort === "desc") {
        sortOption.price = -1;
    }

    const options = {
        page,
        limit,
        sort: sortOption,
        lean: true
    };

    const result = await this.productoDao.getProductos(filter, options);

    return {
        status: "success",
        payload: result.docs,
        totalPages: result.totalPages,
        prevPage: result.prevPage,
        nextPage: result.nextPage,
        page: result.page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        prevLink: result.hasPrevPage ? `?page=${result.prevPage}` : null,
        nextLink: result.hasNextPage ? `?page=${result.nextPage}` : null
    };
}

//GET-ID
async getProductById(pid) {
    const product = await this.productoDao.getProductById(pid);
    return product;
}

//CREATE
async createProduct(productData) {
    const newProduct = await this.productoDao.createProduct(productData);
    return newProduct;
}

//UPDATE
async updateProduct(pid, productData) {
    return await this.productoDao.updateProduct(pid, productData);
}

//DELETE
async deleteProduct(pid){
    return await this.productoDao.deleteProduct(pid);
}
}

export default ProductService;