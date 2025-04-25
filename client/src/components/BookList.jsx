import React from 'react';
import axios from 'axios';

const BookList = ({ books, onUpdate }) => {
  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    onUpdate();
  };

  return (
    <div>
      <h2>Book List</h2>  
      {books.length === 0 && <p>No books available.</p>}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div><strong>Title:</strong> {book.title}</div>
            <div><strong>Author:</strong> {book.author}</div>
            <div><strong>Genre:</strong> {book.genre}</div>
            <div><strong>Rating:</strong> {book.rating}/5</div>
            <div><strong>Published on:</strong> {new Date(book.publishedOn).toDateString()}</div>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
