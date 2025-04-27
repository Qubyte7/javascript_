import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/:id",getProduct);
productRouter.post("/",createProduct);
productRouter.delete("/delete/:id",deleteProduct);
productRouter.put("/update/:id",updateProduct);

export default productRouter;
