import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import Controller from './controller';
import { GetThingSchema, CreateThingSchema } from './schema';

async function Thing(server: FastifyInstance, options: unknown, done: Function) {

  server.route({
    method: 'GET',
    url: '/thing',
    schema: GetThingSchema,
    handler: (req, res) => Controller.get(req, res)
  });


  server.route({
    method: 'POST',
    url: '/thing',
    schema: CreateThingSchema,
    handler: (req, res) => Controller.create(req, res)
  })

  done();

}

export default fp(Thing);