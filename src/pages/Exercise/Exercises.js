import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import AllExercisesDetails from '../../containers/Exercise/AllExercisesDetails.js';
import { GetAllExercises } from '../../queries/exerciseQueries.js';

const Exercises = () => {
  const { loading, error, data } = useQuery(GetAllExercises);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.allExercises?.map((allExercises, index) => (
        <AllExercisesDetails
          key={allExercises.id}
          allExercises={allExercises}
        />
      ))}
    </QueryResult>
  );
};

export default Exercises;
