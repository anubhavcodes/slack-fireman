import redis from 'redis';
import { promisify } from 'util';
import 'dotenv/config';

const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

client.on('connect', () => {
  console.log('connected to redis');
});

client.on('error', (err) => {
  console.error(`Error starting redis - ${err}`);
});

export const getAsync = promisify(client.get).bind(client);

export default { set: (key, value) => { client.set(key, value); }, getAsync };
