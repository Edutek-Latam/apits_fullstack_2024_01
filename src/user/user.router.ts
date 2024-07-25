import { Router } from "express";
import { create, findAll, findOne, update } from './user.controller';
import { validateData } from "../middleware/validation.middleware";
import { userSchema } from "../schemas/user.schema";

export const routerUser = Router()
routerUser.get('/user', findAll)
routerUser.post('/user',validateData(userSchema), create)
routerUser.get('/user/:usuario', findOne)
routerUser.put('/user/:usuario', update)


//,