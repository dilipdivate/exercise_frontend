import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import { useParams } from 'react-router-dom';

import { GetExerciseId } from '../../queries/exerciseQueries.js';
import ExerciseDetails from '../../containers/Exercise/ExerciseDetails.js';
const Exercise = () => {
  let { exerciseId } = useParams();
  const { loading, error, data } = useQuery(GetExerciseId, {
    variables: { exerciseId },
  });
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <ExerciseDetails exerciseId={data?.exerciseId} />
    </QueryResult>
  );
};

export default Exercise;
