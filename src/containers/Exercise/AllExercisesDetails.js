import React from 'react';

const AllExercisesDetails = ({ allExercises }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = allExercises;
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

export default AllExercisesDetails;
