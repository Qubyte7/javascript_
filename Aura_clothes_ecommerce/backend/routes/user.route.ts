import { Router } from "express";

const userRouter = Router();
userRouter.get("/", (req, res,next) => res.send("user route"));


export default userRouter;