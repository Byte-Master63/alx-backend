import redis from 'redis';

const client = redis.createClient();

// Delete existing key first
client.del("ALX", (err) => {
  if (err) console.error(err);

  // Then perform HSET operations
  client.hset("ALX", "Portland", 50, redis.print);
  client.hset("ALX", "Seattle", 80, redis.print);
  client.hset("ALX", "New York", 20, redis.print);
  client.hset("ALX", "Bogota", 20, redis.print);
  client.hset("ALX", "Cali", 40, redis.print);
  client.hset("ALX", "Paris", 2, redis.print);

  client.hgetall("ALX", (err, reply) => {
    if (err) console.error(err);
    console.log(reply);
    client.quit(); // Close connection
  });
});
