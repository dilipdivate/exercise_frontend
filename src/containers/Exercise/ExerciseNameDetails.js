import React from 'react';

const ExerciseNameDetails = ({ exerciseName }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = exerciseName;
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

export default ExerciseNameDetails;
