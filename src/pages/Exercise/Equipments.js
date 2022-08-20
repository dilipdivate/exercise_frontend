import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import AllEquipmentsDetails from '../../containers/Exercise/AllEquipmentsDetails.js';
import { GetAllEquipments } from '../../queries/exerciseQueries.js';

const Equipments = () => {
  const { loading, error, data } = useQuery(GetAllEquipments);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      {data?.allEquipments?.map((allEquipments, index) => (
        <AllEquipmentsDetails
          key={allEquipments.id}
          allEquipments={allEquipments}
        />
      ))}
    </QueryResult>
  );
};

export default Equipments;
