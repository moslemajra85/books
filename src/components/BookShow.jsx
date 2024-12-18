import React, { useState } from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import BookEdit from './BookEdit';
const BookShow = ({ deleteBook, book, updateBook }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        {visible === true ? (
          <BookEdit book={book} updateBook={updateBook} />
        ) : (
          false
        )}
      </div>
      <div className="actions d-flex gap-2 justify-content-center align-items-center mb-1">
        <MdEdit
          onClick={() => setVisible(!visible)}
          color="purple"
          cursor="pointer"
        />
        <RiDeleteBin2Fill
          onClick={() => deleteBook(book.id)}
          color="red"
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export default BookShow;
