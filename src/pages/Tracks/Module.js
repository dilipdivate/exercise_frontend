import React from 'react';
import { useQuery } from '@apollo/client';
import { GetModule } from '../../queries/trackQueries.js';
import QueryResult from '../../components/QueryResult';
import ModuleDetail from '../../containers/Track/ModuleDetail';
import { useParams } from 'react-router-dom';

const Module = () => {
  let { trackId, moduleId } = useParams();
  console.log(trackId, moduleId);
  const { loading, error, data } = useQuery(GetModule, {
    variables: { moduleId, trackId },
  });
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <ModuleDetail track={data?.track} module={data?.module} />
    </QueryResult>
  );
};

export default Module;
