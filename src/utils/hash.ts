import * as bcrypt from 'bcrypt';


const saltRound = 15;

/**
 * 
 * @param password 
 */
console.time()
export function passwordHash(password: string ){
    const salt = bcrypt.genSaltSync(saltRound);
    console.log(salt);
    const hash = bcrypt.hash(password, salt);
    return hash;
}
console.timeEnd()
/**
 * 
 * @param password 
 * @param dbPassword 
 */
export function validate(password: string, dbPassword: string){

    const isValid = bcrypt.compareSync(password, dbPassword)
    return isValid
}