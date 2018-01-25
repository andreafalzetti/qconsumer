const PubSub = require('@google-cloud/pubsub');

// Example: https://github.com/GoogleCloudPlatform/nodejs-getting-started/blob/master/6-pubsub/lib/background.js

// function getTopic (pubsub, cb) {
//   pubsub.createTopic(topicName, (err, topic) => {
//     // topic already exists.
//     if (err && err.code === 6) {
//       cb(null, pubsub.topic(topicName));
//       return;
//     }
//     cb(err, topic);
//   });
// }

const mapToPubSub = (Consumer) => async (options) => {
  console.log('mapToPubSub!')
  // const connection = await Consumer.connect(options.amqpUrl);
  const pubsub = Consumer({
    projectId: options.projectId
  });

  console.log('pubsub', pubsub);
  // const channel = await connection.createChannel();
  return ({
    start: () => console.log('start'),
    stop: () => console.log('stop')
  });
};

module.exports = mapToPubSub(PubSub);

