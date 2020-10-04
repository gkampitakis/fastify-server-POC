import { FastifyRequest, FastifyReply } from "fastify";

class UserController {
  public get(request: FastifyRequest, response: FastifyReply) {
    response.status(200).send({ response: 'User Controller' });
  }
}

export default new UserController();