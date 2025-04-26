import { Router } from "express";
import { createBook } from "../controller/book.controller";
const bookRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         bookName:
 *           type: string
 *           example: "Sample Book"
 *         authorId:
 *           type: integer
 *           example: 1
 *         categoryname:
 *           type: string
 *           example: "Fiction"
 */

/**
 * @swagger
 * /api/v1/books/create:
 *   post:
 *     summary: Create a new book
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 book:
 *                   $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
bookRouter.post("/create", createBook);

export default bookRouter;