import { Request, Response } from "express";
import pool from "../database";
class ProductsController {
    public list(req: Request, res: Response) {
        res.json({ text: 'list products' });
    }
    public getOne(req: Request, res: Response) {
        res.json({ text: 'list product ' + req.params.id });
    }
    public create(req: Request, res: Response) {
        res.json({ text: 'Creating a product' })
    }
    public update(req: Request, res: Response) {
        res.json({ text: 'update a product ' + req.params.id })
    }
    public delete(req: Request, res: Response) {
        res.json({ text: 'delete a product ' + req.params.id })
    }
}

const productsController = new ProductsController();
export default productsController;