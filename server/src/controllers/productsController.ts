import { Request, Response } from "express";
import pool from "../database";
class ProductsController {
    public async list(req: Request, res: Response): Promise<void> {
        const products = await pool.query('SELECT*FROM products');
        console.log(products);
        res.json(products);
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const products = await pool.query('SELECT*FROM products WHERE id=?', [id]);
        if (products.length > 0) {
            return res.json(products[0]);
        } else {
            res.status(404).json({ text: "The product doesn't exists" });
        }
    }
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO products set ?', [req.body]);
        res.json({ message: 'Product Saved' })
        console.log(req.body);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE products set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Product Update" })
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM products WHERE id = ?', [id]);
        res.json({ message: "Product Delete" })
    }
}

const productsController = new ProductsController();
export default productsController;