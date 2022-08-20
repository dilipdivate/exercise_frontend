import React from 'react';

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <p>LOADING...</p>;
  }

  if (!data) {
    return <p>Nothing to show</p>;
  }

  if (data) {
    return children;
  }
};

export default QueryResult;
