import React from 'react';

const TargetMusclesDetails = ({ targetMuscle }) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = targetMuscle;
  console.log(targetMuscle);
  return <div>{targetMuscle}</div>;
};

export default TargetMusclesDetails;
