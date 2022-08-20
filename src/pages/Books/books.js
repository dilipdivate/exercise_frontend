import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { AddBook } from '../../mutations/bookMutation.js';
import { useMutation } from '@apollo/client';

const Books = ({ book }) => {
  const { title, writer } = book;
  const [titleName, setTitleName] = useState('');
  const [writerName, setWriterName] = useState('');
  const [AddBook] = useMutation(AddBook);
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
        onChange={(event) => {
          setTitleName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Writer Name..."
        onChange={(event) => {
          setWriterName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          AddBook({
            variables: {
              input: {
                title,
                writerName,
              },
            },
          });
          // refetch();
        }}
      >
        Create Book
      </button>
    </div>
  );
};

export default Books;
