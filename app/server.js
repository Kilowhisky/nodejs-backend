import mongoose from 'mongoose';
import config from './config/config';
import app from './config/express';

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});


// listen on port config.port
app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});

export default app;
