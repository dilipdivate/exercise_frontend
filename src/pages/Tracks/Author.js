import { GetAuthor } from '../../queries/trackQueries.js';

import React from 'react';
import { useQuery } from '@apollo/client';
import QueryResult from '../../components/QueryResult.js';
import { useParams } from 'react-router-dom';

import AuthorDetails from '../../containers/Track/AuthorDetails';
const Author = () => {
  let { authorId } = useParams();
  console.log(authorId);
  const { loading, error, data } = useQuery(GetAuthor, {
    variables: { authorId },
  });
  console.log(data, error, loading);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <AuthorDetails author={data?.author} />
    </QueryResult>
  );
};

export default Author;
