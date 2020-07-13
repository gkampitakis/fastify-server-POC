import fastify, { FastifyInstance } from 'fastify';
import swagger from 'fastify-oas';
import cors from 'fastify-cors';
import auto_load from 'fastify-autoload';
import path from 'path';
import config from './config';

export class Server {

  private server: FastifyInstance;

  public constructor() {

    this.server = fastify();

    this.setup();

  }

  private setup() {

    this.server
      .register(cors, config.cors)
      .register(auto_load, {
        dir: path.join(__dirname, 'routes')
      });

  }

  public start(port: number) {

    return this.server.listen(port, '0.0.0.0');

  }

}