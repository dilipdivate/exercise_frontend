import { gql } from '@apollo/client';

const CreatePost = gql`
  mutation CreatePost($post: PostType) {
    createPost(post: $post) {
      id
      body
      createdAt
    }
  }
`;

const UpdatePost = gql`
  mutation UpdatePost($updatePostId: ID!, $body: String!) {
    updatePost(id: $updatePostId, body: $body)
  }
`;
const DeletePost = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      id
      body
      createdAt
    }
  }
`;

export { CreatePost, UpdatePost, DeletePost };
