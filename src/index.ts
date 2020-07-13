import { Server } from './server';

new Server().start(5000)
  .then((v) => console.log(`Server listening on ${v}`))
  .catch(err => console.error(err));
