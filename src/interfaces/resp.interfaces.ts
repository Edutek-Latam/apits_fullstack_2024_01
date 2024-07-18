import { CODES, SUCCESS } from "../enums";


export interface IResponse{
    code:CODES, 
    success: SUCCESS,
    message: string,
    data: any
}