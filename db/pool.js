import { Pool } from 'pg';

import dotenv from "dotenv"

dotenv.config()


const pool = new Pool({
    host: process.env.POOL_HOST,
    user: process.env.POOL_USER,
    database: process.env.POOL_DATABASE,
    password: process.env.POOL_PASSWORD,
    port: process.env.POOL_PORT,
});

export default pool;