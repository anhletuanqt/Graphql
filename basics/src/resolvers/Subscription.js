const Subscription = {
  count: {
    subscribe: (parent, ctx, { pubsub }) => {
      let count = 0;

      setInterval(() => {
        count++;
        pubsub.publish('countChannel', {
          count // [subscriptionName]: value
        });
      }, 1000);

      return pubsub.asyncIterator('countChannel');
    }
  },

  comment: {
    subscribe: (parent, { postId }, { pubsub }) => {
      return pubsub.asyncIterator(`Comment ${postId}`);
    }
  }
};

export { Subscription as default };
