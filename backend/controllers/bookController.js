const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  const books = await Book.find({ userId: req.user });
  res.json(books);
};

exports.addBook = async (req, res) => {
  const { title, author, tags, status } = req.body;

  const book = await Book.create({
    userId: req.user,
    title,
    author,
    tags,
    status,
  });

  res.json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};