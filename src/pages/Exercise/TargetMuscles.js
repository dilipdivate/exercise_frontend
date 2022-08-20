import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import TargetMusclesDetails from '../../containers/Exercise/TargetMusclesDetails.js';
import { GetTargetMuscles } from '../../queries/exerciseQueries.js';

const TargetMuscles = () => {
  const { loading, error, data } = useQuery(GetTargetMuscles);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.targetMuscles?.map((targetMuscle, index) => (
        <TargetMusclesDetails
          key={targetMuscle.id}
          targetMuscle={targetMuscle}
        />
      ))}
    </QueryResult>
  );
};

export default TargetMuscles;
