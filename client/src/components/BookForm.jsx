import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({ onBookAdded }) => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    publishedOn: '',
    genre: '',
    rating: 0
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newBook = {
      ...form,
      id: uuidv4(),
      rating: Number(form.rating),
      publishedOn: new Date(form.publishedOn)
    };
    await axios.post('http://localhost:5000/api/books', newBook);
    setForm({ title: '', author: '', publishedOn: '', genre: '', rating: 0 });
    onBookAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label><br />
      <input name="title" value={form.title} onChange={handleChange} required /><br /><br />

      <label>Author:</label><br />
      <input name="author" value={form.author} onChange={handleChange} required /><br /><br />

      <label>Published On:</label><br />
      <input name="publishedOn" type="date" value={form.publishedOn} onChange={handleChange} required /><br /><br />

      <label>Genre:</label><br />
      <input name="genre" value={form.genre} onChange={handleChange} required /><br /><br />

      <label>Rating (0-5):</label><br />
      <input name="rating" type="number" min="0" max="5" value={form.rating} onChange={handleChange} required /><br /><br />

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
