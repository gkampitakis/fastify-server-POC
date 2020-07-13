import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import Controller from './controller';

async function User(server: FastifyInstance, options: unknown, done: Function) {

  server.route({
    method: 'GET',
    url: '/user',
    schema: {},
    handler: (req, res) => Controller.get(req, res)
  });

  done();

}

export default fp(User);