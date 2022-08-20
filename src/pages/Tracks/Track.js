import React from 'react';
import { useQuery } from '@apollo/client';
import { GetTrack } from '../../queries/trackQueries.js';
import QueryResult from '../../components/QueryResult';
import TrackDetail from '../../containers/Track/TrackDetail';
import { useParams } from 'react-router-dom';

const Track = (props) => {
  let { trackId } = useParams();
  console.log(trackId);
  const { loading, error, data } = useQuery(GetTrack, {
    variables: { trackId: trackId },
  });

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  );
};

export default Track;
