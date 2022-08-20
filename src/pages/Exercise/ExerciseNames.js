import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import ExerciseNameDetails from '../../containers/Exercise/ExerciseNameDetails.js';
import { GetExerciseName } from '../../queries/exerciseQueries.js';
import { useParams } from 'react-router-dom';

const ExerciseNames = () => {
  let { exerciseName } = useParams();
  console.log(exerciseName);
  const { loading, error, data } = useQuery(GetExerciseName, {
    variables: { exerciseName },
  });
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.exerciseName?.map((exerciseName, index) => (
        <ExerciseNameDetails
          key={exerciseName.id}
          exerciseName={exerciseName}
        />
      ))}
    </QueryResult>
  );
};

export default ExerciseNames;
