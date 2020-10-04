# Fastify Server POC

## Description

This is repo is for testing and investigating how to set up a fastify server with 
- Health Checks 
- CORS 
- HTTP-Errors
- Documentation through Swagger

## Using

- `fastify-autoload` For registering plugins and routes
- `dotenv` For loading env variables from .env files.
- `fastify-cors`
- `fastify-custom-healthcheck` For registering a health route with custom health checks.
- `fastify-swagger` For creating swagger docs based on route schemas.
- `fluent-schema` Creating JSON schemas easier.
- `fastify-plugin`