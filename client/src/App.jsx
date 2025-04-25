import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm.jsx';
import BookList from './components/BookList.jsx';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Manager</h1>
      <BookForm onBookAdded={fetchBooks} />
      <BookList books={books} onUpdate={fetchBooks} />
    </div>
  );
};

export default App;
