export const typeDefs = `#graphql 
  enum Role {
    USER
    SUPERUSER
  }

type Message {
  message: String!
}

type User {
  id: ID!
  email: String!
  password: String!
  role: Role!
  name: String
  image: String
  createdAt: String!
  updatedAt: String!
}

  type Query {
    users: [User!]!
    user(id: ID!): User
    me: User
  }

  type Mutation {
    createUser(email: String!, role: Role, name: String, image: String, password: String): User!
    userSignIn(email: String!, password: String!): User
    deleteUser(id: ID!): User
    signOut: Boolean
    passwordReset(email: String!): Message!
    signInWithGoogle(token: String!): User
  }
`;
