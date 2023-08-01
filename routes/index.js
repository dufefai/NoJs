var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var book =  await BookModel.find();
  res.render('book_list', {books : book});
});

module.exports = router;
