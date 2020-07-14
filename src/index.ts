import { Server } from './server';
import config from './config'

new Server().start(config.server.port)
  .then((v) => console.log(`Server listening on ${v}`))
  .catch(err => console.error(err));
