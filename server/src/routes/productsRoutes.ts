import { Router } from "express";

class ProductsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', (req, res) => res.send('Products'));
    }
}
const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;