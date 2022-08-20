const { gql } = require('@apollo/client');

const GetUser = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      userId
      username
      userrole
      email
    }
  }
`;

export { GetUser };
