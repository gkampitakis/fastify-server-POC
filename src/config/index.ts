import dotenv from 'dotenv';

dotenv.config({
  path: process.cwd() + `/.env.${process.env.NODE_ENV}`
});

export default {
  server: {
    port: process.env.PORT
  },
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'prd',
  logger: {
    level: process.env.NODE_ENV === 'prd' ? 'warn' : 'debug',
    prettyPrint: !(process.env.NODE_ENV === 'prd'),
    name: process.env.SERVICE
  },
  cors: {
    origin: "*"
  }
}