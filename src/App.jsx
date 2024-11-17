import React, { useEffect, useState } from 'react';
import BookAdd from './components/BookAdd';
import httpClient from './services/httpClient';
import BookList from './components/BookList';

const App = () => {
  const [data, setData] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await httpClient.get('/books');
      setData(response.data);
    } catch (error) {}
  };

  const addBook = async (book) => {
    // update database
    const response = await httpClient.post('/books', book);

    // update UI
    setData([...data, response.data]);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <BookList data={data} />
      <BookAdd addBook={addBook} />
    </div>
  );
};

export default App;
