import { Router } from "express";
import { createBook } from "../controller/book.controller";
const bookRouter=Router()
bookRouter.post("/create",createBook)
export default bookRouter

