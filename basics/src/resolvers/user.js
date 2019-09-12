const User = {
  posts: (parent, args, { db }) => {
    return db.posts.filter(post => parent.posts.includes(post.id));
  },
  comments: (parent, args, { db }) => {
    return db.comments.filter(c => c.userID === parent.id);
  }
};

export { User as default };
