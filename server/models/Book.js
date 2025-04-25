import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedOn: { type: Date, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
