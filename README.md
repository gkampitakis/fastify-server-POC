# fastify-server-POC
A POC server for testing some features of fastify


- Health Checks 
- Cors 
- Http-Errors
- Swagger

//Fastify oas (OAS 3) vs fastify swagger (OAS 2)
//Fastify oas not support yet for fastify v3

## Findings: 

### Swagger

There are 2 libraries for swagger. `fastify-swagger` and `fastify-oas`.

Fastify swagger is for OAS2.0
Fastify oas is for OAS3.0

Currently fastify oas doesn't support the latest version of fastify which is v3.

For more information on differences between those 2 specifications you can read [6-most-significant-changes-in-oas-3-0](https://blog.restcase.com/6-most-significant-changes-in-oas-3-0/)

### Create Schema

https://www.fastify.io/docs/v2.2.x/Validation-and-Serialization/

https://www.fastify.io/docs/v2.2.x/Validation-and-Serialization/

Some good news about fastify, with the usage of schema it gives support for validation on our requests.

The bad news when we right those schemas we need to be really careful and the syntax is a bit complicate. Still investigating.


```bash
npm i fluent-schema
```

This is a library author of fastify is proposing for creating schemas.

https://www.fastify.io/docs/latest/Fluent-Schema/

Theres is is this library that helps with the schema.