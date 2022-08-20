import React from 'react';

const TargetMuscleDetails = ({ targetMuscle }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = targetMuscle;
  console.log(bodyPart);
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

export default TargetMuscleDetails;
