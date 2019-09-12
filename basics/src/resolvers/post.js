const Post = {
  author: (parent, args, { db }) => {
    return db.users.filter(u => u.id === parent.author);
  },
  comments: (parent, args, { db }) => {
    return db.comments.filter(c => c.post === parent.id);
  }
};

export { Post as default };
