import { Router } from "express";
import {routerUser} from './user/user.router'
import { routerLogin } from "./auth/singin/login.route";

export function getRutas(){
    const router = Router()
    router.use('/api', routerLogin)
    router.use('/api',routerUser)
    return router
}
//const userRouter = routerUser;

