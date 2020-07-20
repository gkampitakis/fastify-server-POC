import dotenv from 'dotenv';
import package_json from '../../package.json';

dotenv.config({
  path: process.cwd() + `/.env.${process.env.NODE_ENV}`
});

export default {
  server: {
    port: parseInt(process.env.PORT)
  },
  environment: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'prd',
  logger: {
    level: process.env.NODE_ENV === 'prd' ? 'warn' : 'debug',
    prettyPrint: process.env.NODE_ENV !== 'prd',
    name: process.env.SERVICE
  },
  cors: {
    origin: "*"
  },
  docs: {
    routePrefix: '/dev/documentation',
    addModels: true,
    basePath: '/',
    swagger: {
      info: {
        title: 'Fastify Server Spike',
        description: 'Fastify Server Spike',
        version: package_json.version,
        contact: {
          name: "Georgios Kampitakis",
          url: "https://github.com/gkampitakis",
          email: "gkabitakis@gmail.com"
        }
      },
      externalDocs: {
        url: 'https://github.com/gkampitakis/fastify-server-POC/blob/master/README.md',
        description: 'Github Repo',
      },
      host: 'https://mockHost.com',
      schemes: ['https'],
      consumes: ['application/json', 'text/plain'],
      produces: ['application/json', 'text/plain'],
    },
    definitions: {},
    tags: [
      {
        name: 'User',
        description: 'User route'
      },
      {
        name: 'Thing',
        description: 'Thing route'
      }
    ],
    exposeRoute: process.env.NODE_ENV !== 'prd',
  }
}