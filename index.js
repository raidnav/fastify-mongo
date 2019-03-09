const mongoose = require('mongoose');
const routes = require('./routes');
const swagger = require('./config/swagger');

const fastify = require('fastify')({
  logger: true
});

fastify.register(require('fastify-swagger'), swagger.options);

mongoose.connect(`mongodb://localhost/mycargarage`)
  .then(() => console.log(`MongoDB connected...`))
  .catch(err => console.log(err));

routes.forEach((route, index) => {
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