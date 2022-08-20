import { gql } from '@apollo/client';

const CreateUser = gql`
  mutation Mutation(
    $userId: ID!
    $username: String!
    $userrole: String!
    $email: String
  ) {
    createUser(
      userId: $userId
      username: $username
      userrole: $userrole
      email: $email
    ) {
      userId
      username
      userrole
      email
    }
  }
`;

const UpdateUser = gql`
  mutation UpdateUser(
    $userId: ID!
    $username: String!
    $userrole: String!
    $email: String
  ) {
    updateUser(
      userId: $userId
      username: $username
      userrole: $userrole
      email: $email
    ) {
      userId
      username
      userrole
      email
    }
  }
`;
const DeleteUser = gql`
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      userId
      username
      userrole
      email
    }
  }
`;

export { CreateUser, UpdateUser, DeleteUser };
