const { gql } = require('@apollo/client');

const GetBooks = gql`
  query Books {
    books {
      title
      writer {
        name
        books {
          ... on TextBook {
            title
            writer {
              name
              books {
                ... on TextBook {
                  title
                  courses {
                    courseName
                  }
                }
                ... on ColoringBook {
                  title
                  colors
                }
              }
            }
          }
          ... on ColoringBook {
            title
            colors
          }
        }
      }
    }
  }
`;

const GetWriter = gql`
  query Writers {
    writers {
      name
      books {
        title
        ... on TextBook {
          title
        }
        ... on ColoringBook {
          title
          colors
        }
      }
    }
  }
`;

export { GetBooks, GetWriter };
