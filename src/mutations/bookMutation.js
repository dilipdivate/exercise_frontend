import { gql } from '@apollo/client';

const AddBook = gql`
  mutation AddBook {
    addBook {
      title
      writer {
        name
      }
    }
  }
`;
export { AddBook };
