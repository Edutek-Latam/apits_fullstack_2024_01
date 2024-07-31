import { AppDataSource } from "../../config/db";
import { User } from "../../user/user.entity";
import { user } from "../../user/user.model";
import { validate } from "../../utils/hash";

const _userRepository = AppDataSource.getRepository(User);

export async function authUser(userLogin: any){
    const userObj = await _userRepository.createQueryBuilder()
    .select(['user','password'])
    .where({ user:user})
    .execute()

    if(userObj){
        let isValid  = validate(userLogin.password,userObj.password) 
        console.log(isValid)
        //if(isValid) return {message:'Hola mundo'}
    }


}