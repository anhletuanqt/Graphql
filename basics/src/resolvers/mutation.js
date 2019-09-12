const Mutation = {
  createUser: (parent, args, { db }) => {
    const { user } = args;
    const _user = { id: 123, ...user };
    db.users.push(_user);
    return _user;
  },
  createPost: (parent, args, { db }) => {
    const { title, body, published } = args;
    const post = { id: 123, title, body, published };
    db.posts.push(post);
    return post;
  },
  createComment: (parent, args, { db, pubsub }) => {
    const cmt = { id: 123, ...args };
    db.comments.push(cmt);
    pubsub.publish('Comment 1', { comment: cmt });
    return cmt;
  }
};

export { Mutation as default };
