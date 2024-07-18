import { Router } from "express";
import {getRouter} from './user/user.router'

export function getRutas(){
    const router = Router()
    router.get('/',(req,res)=>{res.send('Hola mundo')})
    router.use('/api',getRouter())
    return router
}
//const userRouter = routerUser;

