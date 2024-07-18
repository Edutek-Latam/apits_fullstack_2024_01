import { CODES, SUCCESS,MESSSAGE } from "../enums";

import { IResponse } from "../interfaces/resp.interfaces";
import { user } from "./user.model";


export function findAll(){
    return user;
}

/**
 * 
 * @param usuario 
 * @returns 
 */
export function findOne(usuario: string){
    const userResult = user.filter(users=> users.user=== usuario);
    return userResult
}

/**
 * 
 * @param body 
 * @returns 
 */
export function create(body: any) : IResponse{
    user.push(body)
    return {code:CODES.OK, 
        success:SUCCESS.OK,
        data:{...body}, 
        message:MESSSAGE.CREATE_USER}
}

/**
 * 
 * @param usuario 
 * @param body 
 * @returns 
 */
export function update(usuario: string, body: any){
    const userResult = findOne(usuario);
    if(!userResult){
        return 
    }
}

export function activate(id: string){}
