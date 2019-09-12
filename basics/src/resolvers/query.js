const Query = {
  me: (parent, args, ctx, info) => {
    console.log('args: ', args); // ages.name
    return {
      id: 1,
      name: 'Tuan Anh Le',
      email: 'anhletuaqt@gmail.com',
      age: 23
    };
  },
  post: () => {
    return {
      id: 1,
      title: 'Post',
      body: 'body',
      published: true
    };
  },
  users: (parent, args, ctx) => ctx.db.users,
  posts: (parent, args, ctx) => ctx.db.posts,
  comments: (parent, args, ctx) => ctx.db.comments
};

export { Query as default };
