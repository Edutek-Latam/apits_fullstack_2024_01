import { Router } from "express";
import { loginuser } from "./login.controller";

export const routerLogin = Router()
routerLogin.post('/auth/singin', loginuser)