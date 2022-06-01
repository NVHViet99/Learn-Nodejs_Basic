const { book, author } = require('../models/model');

const bookController = {
  addBook: async (req, res) => {
    try {
      const newBook = new book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        const Author = author.findById(req.body.author);
        await Author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const allBooks = await book.find();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },
  getAnBook: async (req, res) => {
    try {
      const Book = await book.findById(req.params.id).populate('author');
      res.status(200).json(Book);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },
  updateBook: async (req, res) => {
    try {
      const Book = await book.updateOne(req.body);
      res.status(200).json('success!');
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },
};

module.exports = bookController;
