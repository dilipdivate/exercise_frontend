import React from 'react';
import { useQuery } from '@apollo/client';
import { GetTracksForHome } from '../../queries/trackQueries.js';
import QueryResult from '../../components/QueryResult';

import TrackCard from '../../containers/Track/TrackCard.js';

const Tracks = () => {
  const { loading, error, data } = useQuery(GetTracksForHome);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {console.log('Dilip', data)}
      {data?.tracksForHome?.map((track, index) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  );
};

export default Tracks;
