import dotenv from 'dotenv';

dotenv.config({
  path: process.cwd() + `/.env.${process.env.NODE_ENV}`
});

const env = {
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

export default env;


console.log(env.logger.prettyPrint);
console.log(env.logger.level);
