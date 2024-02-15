const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  // Assuming you have a data structure containing registered users
  const existingUser = getUserByUsername(username);

  // Check if the username already exists
  if (existingUser) {
    res.status(400).send({ error: 'Username already exists. Please choose a different username.' });
  } else if (!username || !password) {
    // Check if username or password is not provided
    res.status(400).send({ error: 'Username and password are required for registration.' });
  } else {
    // Register the new user
    registerUser(username, password);

    res.send({ message: 'User registered successfully.' });
  }
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  const books = /* retrieve books */;
  
  // Use JSON.stringify to display the output neatly
  const booksJson = JSON.stringify(books, null, 2);

  // Send the response with the list of books
  res.send(booksJson);
  
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  
  // Find the book details based on ISBN from your data source
  const book = /* retrieve book details by ISBN */;
  
  // Send the response with book details
  res.send(book);
  
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author;
  
  // Find books by the specified author from your data source
  const booksByAuthor = /* retrieve books by author */;
  
  // Send the response with books by the specified author
  res.send(booksByAuthor);
  
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
  
  // Find books by the specified title from your data source
  const booksByTitle = /* retrieve books by title */;
  
  // Send the response with books by the specified title
  res.send(booksByTitle);
  
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;

  // Assuming you have a data structure containing book reviews
  const bookReviews = getBookReviewsByISBN(isbn);

  // Check if there are reviews for the book
  if (bookReviews) {
    res.send(bookReviews);
  } else {
    res.status(404).send({ error: 'No reviews found for the given ISBN.' });
  }
  
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
