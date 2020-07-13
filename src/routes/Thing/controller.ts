import { FastifyRequest, FastifyReply } from "fastify";

class ThingController {


  public get(request: FastifyRequest, response: FastifyReply) {

    response.status(200).send({ response: 'Thing Controller' });

  }

}

export default new ThingController();