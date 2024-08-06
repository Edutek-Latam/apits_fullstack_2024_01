import { sign, verify } from 'jsonwebtoken'
import { ENV } from '../config/env';
const secret = ENV.SECRET;


export function generarToken(payload:any ){
    
    const token =   sign(payload,secret,{expiresIn:'5s'})
    return token;
    
}

export function validateToken(token: string){
    try {
        const isvalid = verify(token, secret);
        return isvalid
    } catch (error) {
        return false
    }
}