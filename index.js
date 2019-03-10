import { connect } from 'mongoose';
import { options } from './config/swagger';

const fastify = require('fastify')({
  logger: true
});

fastify.register(require('fastify-swagger'), options);

connect(`mongodb://localhost/mycargarage`)
  .then(() => console.log(`MongoDB connected...`))
  .catch(err => console.log(err));

forEach((route, index) => {
  fastify.route(route)
});


// Run the server !
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();