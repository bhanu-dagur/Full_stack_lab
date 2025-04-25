import Book from '../models/Book.js';

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const updated = await Book.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
  res.json(updated);
};

const deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ id: req.params.id });
  res.json({ message: 'Book deleted' });
};

export default {
  getBooks,
  createBook,
  updateBook,
  deleteBook
};
