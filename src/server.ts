import fastify, { FastifyInstance } from 'fastify';

export class Server {

    private server: FastifyInstance;

    public constructor() {

        this.server = fastify();

    }

    private setup() {

    }

    public start(port: number) {

        return this.server.listen(port, '0.0.0.0');

    }

}