const Comment = {
  userID: (parent, args, { db }) => {
    return db.users.filter(u => u.id === parent.userID)[0];
  },
  post: (parent, args, { db }) => {
    return db.posts.filter(p => p.id === parent.post)[0];
  }
};

export { Comment as default };

