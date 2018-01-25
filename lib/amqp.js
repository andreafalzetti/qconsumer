const amqp = require('amqplib');

const mapToAmqp = (Consumer) => async (options) => {
  const connection = await Consumer.connect(options.amqpUrl);
  const channel = await connection.createChannel();
  return ({
    start: () => channel.consume(options.queueName, options.handleMessage),
    stop: () => channel.close()
  });
};

module.exports = mapToAmqp(amqp);

