import React from 'react';

const EquipmentTypeDetails = ({ equipmentType }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = equipmentType;
  console.log(equipmentType);
  return (
    <div>
      {bodyPart}
      {equipment}
      {gifUrl}
      {id}
      {name}
      {target}
    </div>
  );
};

export default EquipmentTypeDetails;
