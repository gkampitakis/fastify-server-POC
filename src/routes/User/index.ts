import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import Controller from './controller';

async function User(server: FastifyInstance, options: unknown, done: Function) {

  server.route({
    method: 'GET',
    url: '/user',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          excitement: { type: 'integer' },
        },
        required: ['name', 'excitement']
      },
      response: {
        200: {
          description: 'Response of GET THING',
          type: 'object',
          properties: {
            response: { type: 'string' }
          }
        }
      }
    },
    handler: (req, res) => Controller.get(req, res)
  });

  done();

}

export default fp(User);