/**
 * config babel
 * export as default
 */
// yarn add babel-cli babel-preset-env
// create .babelrc file and add
// {
//   "presets": ["env"]
// }
// "start": "babel-node src/index.js"
// "start": "nodemon src/index.js --exec babel-node",

// const name = 'Tuan Anh Le';
// const age = 22;
// export { name as default, age };
// import name, {age} from './path'

// Scalar type: String, Boolean, Int, Float, ID

// type User {
//   age String!
// }

// ! non-nullable field, sẽ báo lỗi nếu file age là null

// ====================================== Essential ======================================

// 1/ Schema concept

gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type CreateUserMutation implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }
`;
