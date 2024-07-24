import { CODES, SUCCESS,MESSSAGE } from "../enums";

import { IResponse } from "../interfaces/resp.interfaces";
import { user } from "./user.model";


export function findAll(){
    return  {code:CODES.OK, 
        success:SUCCESS.OK,
        data:{...user}, 
        message:MESSSAGE.CREATE_USER}
}


/**
 * 
 * @param usuario 
 * @returns 
 */
export function findOne(usuario: string){
    const userResult = user.find(users=> users.user=== usuario);
    if(userResult) return formatResponse(CODES.OK,SUCCESS.OK, userResult, MESSSAGE.CREATE_USER)
    if(!userResult) return formatResponse(CODES.OK,SUCCESS.NOT_FOUND, {},MESSSAGE.USER_NOT_FOUND)
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
