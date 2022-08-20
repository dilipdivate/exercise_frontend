import React from 'react';

const BodyPartDetails = ({ BodyPart }) => {
  // console.log(bodyPart);
  const { bodyPart, equipment, gifUrl, id, name, target } = BodyPart;
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

export default BodyPartDetails;
