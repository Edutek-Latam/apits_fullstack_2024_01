import { AppDataSource } from "../../config/db";
import { ENV } from "../../config/env";
import { CODES, MESSSAGE, SUCCESS } from "../../enums";
import { IUser } from "../../interfaces";
import { ILogin } from "../../interfaces/login.interfaces";
import { User } from "../../user/user.entity";
import { user } from "../../user/user.model";
import { passwordHash, validate } from "../../utils/hash";
import { sign, verify } from 'jsonwebtoken'
const _userRepository = AppDataSource.getRepository(User);
const secret = ENV.SECRET;

function generarToken(payload:any ){
    
    const token =   sign(payload,secret,{expiresIn:'5s'})
    return token;
    
}



export async function authUser(userLogin: ILogin){
    const userObj = await _userRepository.createQueryBuilder('user')
    .select(['user.username','user.password', 'user.isActive', 'user.id'])
    .where('user.username = :username', { username: userLogin.username})
    //.andWhere({isActive: true})
    .getOne()
    console.log(userObj)
    //validateToken()
     if(!userObj ) return { code: CODES.UNAUTHORIZED, sucess: SUCCESS.NOT_FOUND, message:'No autorizado', data:{} }

    if(userObj && userObj.isActive){
        return { code: CODES.UNAUTHORIZED, sucess: SUCCESS.NOT_FOUND, message:'Cuenta inactiva', data:{} }
    }

    if(userObj){
        let isValid  = validate(userLogin.password,userObj.password) 
        console.log('isvalid ==>',  isValid)
        if(isValid) return { code:CODES.OK, sucess: SUCCESS.OK, message:'operacion exitosa', data:{
            token:  generarToken(userObj.id)
        } }

        if(!isValid) return { code: CODES.UNAUTHORIZED, sucess: SUCCESS.NOT_FOUND, message:'No autorizado', data:{} }

    }


}

export async function createUser(usuario: IUser){
    try {
        const password = await passwordHash(usuario.password)
        //body.password = password;
        const newUser = _userRepository.create({...usuario, isActive:false  ,password:password});
        
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
    
}