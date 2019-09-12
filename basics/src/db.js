const users = [
  {
    id: 1,
    name: 'Tuan Anh Le',
    email: 'anhletuaqt@gmail.com',
    age: 23,
    posts: [1, 2, 3],
    comments: [1, 2]
  },
  {
    id: 2,
    name: 'Oanh Hoang',
    email: 'oanh_hoang@gmail.com',
    age: 21,
    posts: [3],
    comments: [1]
  },
  {
    id: 3,
    name: 'Phuong Trinh Le',
    email: 'phuongtrinhle@gmail.com',
    age: 23,
    posts: [1],
    comments: [2]
  }
];
const posts = [
  {
    id: 1,
    title: 'React',
    body: 'Learn React',
    published: true,
    author: 1,
    comments: [1, 2]
  },
  {
    id: 2,
    title: 'Node',
    body: 'Learn Node',
    published: false,
    author: 1,
    comments: [1]
  },
  {
    id: 3,
    title: 'Golang',
    body: 'Learn Golang',
    published: true,
    author: 3,
    comments: [2]
  }
];
const comments = [
  { id: 111, text: 'A comment React', userID: 1, post: 1 },
  { id: 222, text: 'A comment Golang', userID: 1, post: 1 },
  { id: 333, text: 'A comment Node', userID: 2, post: 2 }
];

export { users, posts, comments };
