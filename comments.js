// create web server
// create a new comment
// get all comments
// get a comment by id
// update a comment by id
// delete a comment by id

// create web server
const express = require('express');
const router = express.Router();

// create a new comment
router.post('/', (req, res) => {
  res.send('create a new comment');
});

// get all comments
router.get('/', (req, res) => {
  res.send('get all comments');
});

// get a comment by id
router.get('/:id', (req, res) => {
  res.send('get a comment by id');
});

// update a comment by id
router.put('/:id', (req, res) => {
  res.send('update a comment by id');
});

// delete a comment by id
router.delete('/:id', (req, res) => {
  res.send('delete a comment by id');
});

module.exports = router;