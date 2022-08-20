import React from 'react';

const ExerciseDetails = ({ exerciseId }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = exerciseId;
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

export default ExerciseDetails;
