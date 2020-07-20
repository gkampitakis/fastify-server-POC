import S from 'fluent-schema';

export const GetThingSchema = {
  tags: ['Thing'],
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
        .required())
  }
}