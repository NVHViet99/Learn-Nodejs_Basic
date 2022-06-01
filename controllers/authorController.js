const { author, book } = require('../models/model');

const authorController = {
  addAuthor: async (req, res) => {
    //   return what you've sent
    res.status(200).json(req.body);
  },
};

module.exports = { authorController };
