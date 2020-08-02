import { Server } from './server';
import config from './config'

new Server().start(config.server.port)
  .addHealthChecks();
