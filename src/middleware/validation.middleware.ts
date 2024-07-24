import {Request,Response, NextFunction, request, response } from 'express'
import {z, ZodError  } from 'zod'

export function validateData(schema: z.ZodObject<any,any>){
    return (req=request, res= response,next: NextFunction)=>{
        try {
            schema.parse(req.body);
            next()
        } catch (error) {
            if(error instanceof ZodError){
                const errorMessage = error.errors.map((issue: any)=>
                    ({ message:`${issue.path.join(',')} is ${issue.message}`})
                )
                
                res.status(400).send({error:'Invalid Data',detail:errorMessage})
                //console.log(errorMessage)
                //const errorMessage =   error.errors.map
            }
        }
    }
}