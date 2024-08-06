import { Router } from "express";
import { create, findAll, findOne, update } from './user.controller';
import { validateData } from "../middleware/validation.middleware";
import { userSchema } from "../schemas/user.schema";
import { authToken } from "../middleware/token_validation.middleware";

export const routerUser = Router()
routerUser.get('/user', findAll)
routerUser.post('/user',validateData(userSchema), authToken , create)
routerUser.get('/user/:usuario', findOne)
routerUser.put('/user/:usuario', update)


