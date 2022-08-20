import { gql } from '@apollo/client';

const IncrementTrackViews = gql`
  mutation Mutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
    }
  }
`;

export { IncrementTrackViews };
