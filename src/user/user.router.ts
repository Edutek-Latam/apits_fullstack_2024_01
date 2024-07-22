    import { Router } from "express";
    import { create, findAll, findOne, update } from './user.controller';
    
export const  routerUser = Router();
routerUser.get('/user',findAll)
routerUser.post('/user',create)
routerUser.get('/user/:id')
    //export function getRouter(){
//
    //    const routerUser = Router()
    //    routerUser.get('/user', findAll);
    //routerUser.get('/user/:usuario', findOne);
    //routerUser.post('/user', create);
    //routerUser.put('/user/:usuario', update)
    //return routerUser;
//
    //}