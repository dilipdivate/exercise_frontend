import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import TargetMuscleDetails from '../../containers/Exercise/TargetMuscleDetails.js';
import { GetTargetMuscle } from '../../queries/exerciseQueries.js';
import { useParams } from 'react-router-dom';

const TargetMuscle = () => {
  let { targetMuscle } = useParams();
  console.log(targetMuscle);
  const { loading, error, data } = useQuery(GetTargetMuscle, {
    variables: { targetMuscle },
  });
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {/* <TargetMuscleDetails targetMuscle={data?.targetMuscle} /> */}

      {data?.targetMuscle?.map((targetMuscle, index) => (
        <TargetMuscleDetails
          key={targetMuscle.id}
          targetMuscle={targetMuscle}
        />
      ))}
    </QueryResult>
  );
};

export default TargetMuscle;
