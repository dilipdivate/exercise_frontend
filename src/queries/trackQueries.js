import { gql } from '@apollo/client';

const GetTracksForHome = gql`
  query getTracksForHome {
    tracksForHome {
      title
      id
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      author {
        id
        name
        photo
      }
      modules {
        id
        title
        length
        content
        videoUrl
      }
    }
  }
`;

const GetAuthor = gql`
  query getAuthor($authorId: String!) {
    author(authorId: $authorId) {
      name
      photo
      id
    }
  }
`;

const GetTrack = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      author {
        name
        photo
        id
      }
      modules {
        id
        title
        length
        content
        videoUrl
      }
    }
  }
`;

const GetTrackModules = gql`
  query getTrackModules($trackId: String!) {
    trackmodules(id: $trackId) {
      id
      title
      length
      content
      videoUrl
    }
  }
`;

const GetModule = gql`
  query getModule($moduleId: ID!) {
    module(id: $moduleId) {
      id
      title
      length
      content
      videoUrl
    }
  }
`;

export { GetTracksForHome, GetAuthor, GetTrack, GetModule, GetTrackModules };
