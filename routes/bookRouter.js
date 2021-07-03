const bookRouter = require("express").Router();

let books = [
  "Harry Potter",
  "Prisoner of Azk",
  "Book 3",
  " The 4",
  "Book 5",
  "Book 6",
];

let checkIfBookExists = (req, res, next) => {
  let id = req.params.id;
  if (id > books.length - 1 || id < 0) {
    return res.send("Id range for books not valid");
  }
  return next();
};

// getting // Read
bookRouter.get("/$", (req, res) => {
  return res.json({ books });
});

// creating
bookRouter.post("/", (req, res) => {
  let newbooks = req.body.newbooks;
  books.push(newbooks);
  return res.json({ book: newbooks ?? "empty" });
});

// get particular item
bookRouter.get("/:id", checkIfBookExists, (req, res) => {
  let id = req.params.id;
  return res.json({ book: books[id] });
});

// delete an item
bookRouter.delete("/:id", checkIfBookExists, (req, res) => {
  let id = req.params.id - 1;
  let value = books[id];
  books = books.filter((vaue, ind) => ind != id);
  //console.log(books);
  return res.json({ book: value });
});

// updates and item
bookRouter.put("/:id", checkIfBookExists, (req, res) => {
  let id = req.params.id - 1;
  let previous = books[id];
  books[id] = req.body.book ?? previous;
  updated = books[id];
  return res.json({ previous, updated });
});

module.exports = bookRouter;
