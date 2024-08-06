import * as env from 'env-var';
import 'dotenv/config';

export const ENV = {
    PORT : env.get('PORT').required().asPortNumber(), 
    DB_USER: env.get('DB_USER').required().asString(),
    DB_HOST: env.get('DB_HOST').required().asString(),
    DB_PWD: env.get('DB_PWD').required().asString(),
    DB_DBNAME: env.get('DB_DBNAME').required().asString(),
    ENVIRONMENT: env.get('ENVIRONMENT').required().asString(),
    SECRET: env.get('SECRET').required().asString()
} 