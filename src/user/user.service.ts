import { BeforeInsert } from "typeorm";
import { AppDataSource } from "../config/db";
import { CODES, SUCCESS,MESSSAGE } from "../enums";
import { IUser } from "../interfaces";

import { IResponse } from "../interfaces/resp.interfaces";
import { User } from "./user.entity";
import { user } from "./user.model";
import { passwordHash } from "../utils/hash";

const _userRepository = AppDataSource.getRepository(User);


export async function findAll(){
    return await _userRepository.find();
}


/**
 * 
 * @param usuario 
 * @returns 
 */
export async function findOne(id: string){
   ///const user = await _userRepository.findOneBy({ id })
   const user = await _userRepository.createQueryBuilder()
   .addSelect('password')
   .where( {id} )
   .execute()
    console.log(user)
   return user;
}

/**
 * 
 * @param body 
 * @returns 
 */
export async  function create(body: IUser) {
    try {
        const password = await passwordHash(body.password)
        //body.password = password;
        const newUser = _userRepository.create({...body, password:password});
        
        const registro = await _userRepository.insert(newUser);
        if(registro){
            return {code: CODES.OK, success: SUCCESS.OK, message:MESSSAGE.CREATE_USER, data: {}}
        }

    } catch (error) {
        if(error instanceof Error){
            const errorMessage = {   errorCode: (error as any).code, detail: (error as any).detail  }
            const resp = { code: CODES.BAD_REQUEST, 
                success: SUCCESS.ERR, 
                message:'Error en base de datos', 
                data:errorMessage }
            return resp
        }
    }
    

   /*  newUser.primerNombre = body.primerNombre
    newUser.segundoNombre = body.segundoNombre;
    newUser.apellidos = body.apellidos;
    newUser.correo = body.correo;
    newUser.password = body.password;
    newUser.telefono = body.telefono;
    newUser.user = body.user; */

    
    
    /* newUser.primerNombre = body.primerNombre
    newUser.segundoNombre = body.segundoNombre;
    newUser.apellidos = body.apellidos;
    newUser.telefono = body.apellidos */

}

/**
 * 
 * @param usuario 
 * @param body 
 * @returns 
 */
export  async function update(id: string, body: IUser){
    const user = await _userRepository.preload({
        id,
        ...body
    })
    await _userRepository.save(user as User)
    return {code:100, message:'Registro guardo conexito'}
}


/**
 * 
 * @param code 
 * @param success 
 * @param data 
 * @param message 
 * @returns 
 */
function formatResponse(code: CODES,success: SUCCESS, data: any, message:MESSSAGE){
    return {code, 
            success,
            data:{...data}, 
            message}
}
export function activate(id: string){}
