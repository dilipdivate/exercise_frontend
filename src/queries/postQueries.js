const { gql } = require('@apollo/client');

const GetPosts = gql`
  query Posts {
    posts {
      id
      body
      createdAt
    }
  }
`;

const GetPost = gql`
  query Post($postId: ID!) {
    post(id: $postId) {
      id
      body
      createdAt
    }
  }
`;

export { GetPosts, GetPost };
