import { Router } from "express";
import { loginuser, singup } from "./login.controller";
import { validateData } from "../../middleware/validation.middleware";
import { loginSchema, userSchema } from "../../schemas/user.schema";

export const routerLogin = Router()
routerLogin.post('/auth/singin',validateData(loginSchema),  loginuser)
routerLogin.post('/auth/register',validateData(userSchema),  singup)