import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import EquipmentTypeDetails from '../../containers/Exercise/EquipmentTypeDetails.js';
import { GetEquipmentType } from '../../queries/exerciseQueries.js';
import { useParams } from 'react-router-dom';

const EquipmentType = () => {
  let { equipmentType } = useParams();
  const { loading, error, data } = useQuery(GetEquipmentType, {
    variables: { equipmentType },
  });
  console.log(data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.equipmentType?.map((equipmentType, index) => (
        <EquipmentTypeDetails
          key={equipmentType.id}
          equipmentType={equipmentType}
        />
      ))}
    </QueryResult>
  );
};

export default EquipmentType;
