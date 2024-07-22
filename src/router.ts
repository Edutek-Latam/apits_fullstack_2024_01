import { Router } from "express";
import { routerUser } from './user/user.router'

export function getRutas(){
    const router = Router()
    router.get('/',(req,res)=>{res.send('Hola mundo')})
    router.use('/api',routerUser)
    return router
}
//const userRouter = routerUser;

