import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import BodyPartDetails from '../../containers/Exercise/BodyPartDetails.js';
import { GetBodyPart } from '../../queries/exerciseQueries.js';
import { useParams } from 'react-router-dom';

const BodyPart = () => {
  let { bodyPart } = useParams();
  const { loading, error, data } = useQuery(GetBodyPart, {
    variables: { bodyPart },
  });
  // console.log(data, error, loading);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.bodyPart?.map((bodyPart, index) => (
        <BodyPartDetails key={bodyPart.id} BodyPart={bodyPart} />
      ))}
      {/* <BodyPartDetails bodyPart={data?.bodyPart} /> */}
    </QueryResult>
  );
};

export default BodyPart;
