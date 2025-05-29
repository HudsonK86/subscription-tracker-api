import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRED_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_TOKEN,
    QSTASH_URL,
    SERVER_URL,
    UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL,
    EMAIL_PASSWORD,
} = process.env;