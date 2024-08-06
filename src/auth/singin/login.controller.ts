import { Request, Response } from "express";
import { authUser } from "./login.service";


export async function loginuser(req: Request,res: Response){
    const { body } = req
    console.log(body)
    const login =  await authUser(body)
    res.status(login!.code).send(login);
}

export async function singup(req: Request,res: Response) {
    const { body } = req
    
}