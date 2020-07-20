import S from 'fluent-schema';

export const GetThingSchema = {
  tags: ['Thing'],
  produces: ['application/json', 'text/plain'],
  query: S.object()
    .prop('id', S.string()),
  response: {
    200: S.object()
      .description('Response of GET THING')
      .prop('status', S.number().required())
      .prop('data', S.array().items(
        S.object()
          .prop('name', S.string().required())
          .prop('id', S.string().required())
          .prop('description', S.string().required())
      )
        .required()),
    400:
      S.object()
        .description('Thing not found')
        .prop('status', S.number().required())
        .prop('message', S.string().required())
  }
};

export const CreateThingSchema = {
  consumes: ['applications/json', 'text/plain'],
  tags: ['Thing'],
  body: S.object()
    .description('A Thing object')
    .examples([
      { name: 'Mock0', description: 'SomeDescription0' },
      { name: 'Mock1', description: 'SomeDescription1' }
    ])
    .prop('name', S.string().description('The name of the thing').required())
    .prop('description', S.string().description('The description of the thing').required()),
  response: {

  }
};