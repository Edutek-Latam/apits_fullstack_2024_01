import "reflect-metadata"
import { DataSource } from 'typeorm'
import {ENV} from './env'
import { User } from "../user/user.entity"

console.log(ENV.ENVIRONMENT)
export const AppDataSource = new DataSource({
    type:'postgres',
    host:ENV.DB_HOST,
    port:5432,
    username:ENV.DB_USER,
    password:ENV.DB_PWD,
    database:ENV.DB_DBNAME,
    synchronize: false,
    logging: ENV.ENVIRONMENT==='prod'?false: true,
    ssl: true,
    entities:[
        User
    ]
})