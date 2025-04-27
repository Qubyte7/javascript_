import { Router } from "express";
import { createUser, getUser , deleteUser, updateUser } from "../controllers/user.contoller";
import { get } from "http";


const userRouter = Router();

userRouter.get("/:id",getUser);
userRouter.post("/",createUser);
userRouter.delete("/:id",deleteUser);
userRouter.put("/update/:id",updateUser);


export default userRouter;