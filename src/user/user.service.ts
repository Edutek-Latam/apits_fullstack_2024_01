import { BeforeInsert } from "typeorm";
import { AppDataSource } from "../config/db";
import { CODES, SUCCESS,MESSSAGE } from "../enums";
import { IUser } from "../interfaces";

import { IResponse } from "../interfaces/resp.interfaces";
import { User } from "./user.entity";
import { user } from "./user.model";

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
   const user = await _userRepository.findOneBy({ id })
   return user;
}

/**
 * 
 * @param body 
 * @returns 
 */
export async  function create(body: IUser) {
    const newUser = new User();
    const keys = Object.keys(body);
    newUser.primerNombre = body.primerNombre
    newUser.segundoNombre = body.segundoNombre;
    newUser.apellidos = body.apellidos;
    newUser.correo = body.correo;
    newUser.password = body.password;
    newUser.telefono = body.telefono;
    newUser.user = body.user;

    const userSave =  await _userRepository.save(newUser)
    return userSave;
    console.log(Object.keys(body));
    
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
export function update(usuario: string, body: any){
    //const userResult = findOne(usuario);
    let userIndex = user.findIndex(users=> users.user=== usuario);
    if(userIndex > 0){
        return formatResponse(CODES.ERR,SUCCESS.NOT_FOUND,{},MESSSAGE.USER_NOT_FOUND)
    }
    user[userIndex] = {...user[userIndex], ...body}
    console.log(user)
    return formatResponse(CODES.OK,SUCCESS.OK,user[userIndex], MESSSAGE.USER_UPDATE)
    //user = {...userResult,}
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
