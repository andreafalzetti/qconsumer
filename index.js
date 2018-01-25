const sqs = require('./lib/sqs');
const amqp = require('./lib/amqp');
const pubsub = require('./lib/pub-sub');

class QueueConsumer {

  constructor(options) {
    this.options = options;
    this.providers = {
      amqp,
      pubsub,
      sqs
    };
  }

  async connect () {
    const consumer = this.providers[this.options.provider](this.options);
    const isPromise = typeof consumer.then === 'function';
    if (isPromise) {
      const result = await consumer;
      this.consumer = result;
    } else {
      this.consumer = consumer;
    }
    this.messageHandler = this.consumer.messageHandler;
  }

  start () {
    return this.consumer.start();
  }

  stop () {
    return this.consumer.stop();
  }
};

module.exports = QueueConsumer;
