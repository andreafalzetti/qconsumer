# qconsumer
------

This is a POC, not production-ready AT ALL!

## Examples

Import:
```
const QueueConsumer = require('qconsumer');
```

### AWS SQS
```
const consumer = new QueueConsumer({
    queueUrl: SQS_QUEUE_URL,
    provider: 'sqs',
    handleMessage: message => {
      console.log(message)
    }
});
consumer.connect();
consumer.start();
```

### AMQP
```
const consumer = new QueueConsumer({
    amqpUrl: AMQP_URL,
    queueName: AMQP_QUEUE_NAME,
    provider: 'amqp',
    handleMessage: message => {
      console.log(message.content.toString())
    }
});
await consumer.loadConsumer();
consumer.start();
```

### PubSub (WIP)
```
const consumer = new QueueConsumer({
    projectId: GCP_PROJECT_ID,
    provider: 'pubsub'
});
// TODO: add connect, add start
```

## Common methods

* `.connect`
* `.start`
* `.stop`
