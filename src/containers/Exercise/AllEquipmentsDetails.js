import React from 'react';

const AllEquipmentsDetails = ({ allEquipments }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = allEquipments;
  console.log(allEquipments);
  return (
    <div>
      {allEquipments}
      {/* {equipment}
      {gifUrl}
      {id}
      {name}
      {target} */}
    </div>
  );
};

export default AllEquipmentsDetails;
