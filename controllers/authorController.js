const { author, book } = require('../models/model');

const authorController = {
  addAuthor: async (req, res) => {
    //   return what you've sent
    // res.status(200).json(req.body);
    try {
      const newAuthor = await new author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (error) {
      // server error
      res.status(500).json(error);
    }
  },
  getAllAuthors: async (req, res) => {
    try {
      const authors = await author.find();
      res.status(200).json(authors);
    } catch (error) {
      console.log(error);
    }
  },
  getAnAuthor: async (req, res) => {
    try {
      const Author = await author.findById(req.params.id).populate('books');
      res.status(200).json(Author);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const Author = await author.updateOne(req.body);
      res.status(200).json('success!');
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { authorController };
