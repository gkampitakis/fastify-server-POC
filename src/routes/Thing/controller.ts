import { FastifyRequest, FastifyReply } from "fastify";

const mockData = [
  {
    name: 'some mock  0',
    id: '0',
    description: 'A really boring description 0'
  },
  {
    name: 'some mock name 1',
    id: '1',
    description: 'A really boring description 1'
  },
  {
    name: 'some mock name 2',
    id: '2',
    description: 'A really boring description 2'
  },
  {
    name: 'some mock name 3',
    id: '3',
    description: 'A really boring description 3'
  }
];

class ThingController {

  public async get(request: FastifyRequest, response: FastifyReply) {
    const { id: reqId } = request.query as any;

    if (!reqId) {
      return response.status(200).send({
        status: 200,
        data: mockData
      });
    }

    const data = mockData.filter(({ id }) => reqId === id);

    if (!data.length)
      return response.status(400).send({
        status: 400,
        message: 'Thing not found'
      });

    return response.status(200).send({
      status: 200,
      data
    });
  }

  public create(request: FastifyRequest, response: FastifyReply) {

  }
}

export default new ThingController();