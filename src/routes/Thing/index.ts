import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import Controller from './controller';

async function Thing(server: FastifyInstance, options: unknown, done: Function) {

  server.route({
    method: 'GET',
    url: '/thing',
    schema: {
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


  server.route({
    method: 'POST',
    url: '/thing',
    schema: {
      response: {
        // 200: {
        //   description: 'Thing was created',
        //   type: 'object',
        //   properties: {
        //     message: { type: 'string' },
        //     status: { type: 'number' },
        //     required: ['message']
        //   }
        // }
      }
    },
    handler: (req, res) => Controller.create(req, res)
  })

  done();

}

export default fp(Thing);