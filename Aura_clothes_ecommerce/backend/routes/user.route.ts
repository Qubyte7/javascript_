import { Router } from "express";
import { createUser, getUser , deleteUser, updateUser } from "../controllers/user.contoller";
import { get } from "http";
import authorize from "../middlewares/auth.middleware";


const userRouter = Router();

userRouter.get("/:id",authorize,getUser);
userRouter.post("/signup/",createUser);
userRouter.delete("/:id",deleteUser);
userRouter.put("/update/:id",updateUser);


export default userRouter;