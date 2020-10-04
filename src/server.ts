import fastify, { FastifyInstance } from 'fastify';
import swagger from 'fastify-swagger';
import cors from 'fastify-cors';
import auto_load from 'fastify-autoload';
import path from 'path';
import config from './config';
import customHealthCheck from 'fastify-custom-healthcheck';
import PromiseUtil from '@gkampitakis/promise-util';

export class Server {
  private server: FastifyInstance;

  public constructor() {
    this.server = fastify();

    this.setup();
  }

  private setup() {
    this.server
      .register(cors, config.cors)
      .register(swagger, config.docs)
      .register(auto_load, {
        dir: path.join(__dirname, 'routes'),
        options: {}
      })
      .register(customHealthCheck, {
        path: '/api/health',
        exposeFailure: true,
        info: {
          server: 'Fastify server',
          usage: 'Experimenting'
        }
      });
  }

  public async addHealthChecks() {
    await this.server.ready();

    this.server.addHealthCheck('test', () => PromiseUtil.delay(2000, () => {
      return Promise.reject('Error test')
    }));

    this.server.addHealthCheck('mongo', () => PromiseUtil.delay(2000, () => Promise.reject('Error')));

    this.server.addHealthCheck('sync', () => true, { value: false });
  }

  public start(port: number) {
    this.server.listen(port, '0.0.0.0')
      .then((v) => console.log(`🚀 Server listening on ${v}`))
      .catch(err => console.error(err));

    return this;
  }
}