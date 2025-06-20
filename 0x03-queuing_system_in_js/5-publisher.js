import redis from 'redis';

const publisher = redis.createClient();

publisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

publisher.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish('ALXchannel', message);
  }, time);
}

// Example usage
publishMessage("Hello ALX!", 1000);
publishMessage("How are you?", 2000);
publishMessage("KILL_SERVER", 3000);
publishMessage("This won't be sent", 4000);  // This won't be processed as server will be killed
