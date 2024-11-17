import React from 'react';
import BookShow from './BookShow';

const BookList = ({ data }) => {
  return (
    <div>
      {data.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
