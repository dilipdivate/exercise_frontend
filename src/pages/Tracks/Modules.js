import React from 'react';
import { useQuery } from '@apollo/client';
import { GetTrackModules } from '../../queries/trackQueries.js';
import QueryResult from '../../components/QueryResult';
import ModulesDetail from '../../containers/Track/ModulesDetail';
import { useParams } from 'react-router-dom';

const Modules = (props) => {
  let { trackId } = useParams();
  console.log(trackId);
  const { loading, error, data } = useQuery(GetTrackModules, {
    variables: { trackId },
  });
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {/* <ModulesDetail trackmodules={data?.trackmodules} /> */}
      {data?.trackmodules?.map((trackmodules, index) => (
        <ModulesDetail key={trackmodules.id} trackmodules={trackmodules} />
      ))}
    </QueryResult>
  );
};

export default Modules;
