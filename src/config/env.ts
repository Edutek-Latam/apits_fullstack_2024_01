import * as env from 'env-var';
import 'dotenv/config';

export const ENV = {
    PORT : env.get('PORT').required().asPortNumber(),  
} 