import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';

import BodyPartsDetails from '../../containers/Exercise/BodyPartsDetails.js';
import { GetBodyPartList } from '../../queries/exerciseQueries.js';

const BodyParts = () => {
  const { loading, error, data } = useQuery(GetBodyPartList);
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.bodyPartList?.map((bodyPart, index) => (
        <BodyPartsDetails key={bodyPart.id} bodyPart={bodyPart} />
      ))}
    </QueryResult>
  );
};

export default BodyParts;
