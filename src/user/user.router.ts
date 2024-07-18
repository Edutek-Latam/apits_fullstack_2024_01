import { Router } from "express";
import { create, findAll, findOne, update } from './user.controller';
export function getRouter(){

    const routerUser = Router()
    routerUser.get('/user',(req,res)=>{ res.status(200) });
routerUser.get('/user/:usuario', findOne);
routerUser.post('/user', create);
routerUser.put('/user/:usuario', update)
return routerUser;

}