import React from 'react';

const AuthorDetails = ({ author }) => {
  const { id, name, photo } = author;

  return (
    <div>
      {id}
      {/* {name}
      {photo} */}
    </div>
  );
};

export default AuthorDetails;
