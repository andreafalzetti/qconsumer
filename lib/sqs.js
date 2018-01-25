const sqs = require('sqs-consumer');

const mapToSqs = (Consumer) => (options) => {
  const consumer = Consumer.create(options);
  return ({
    start: () => consumer.start(),
    stop: () => consumer.stop()
  });
};

module.exports = mapToSqs(sqs);
