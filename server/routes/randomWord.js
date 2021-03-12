const express = require('express');
const router = express.Router();
const fs = require("fs");
const randomWords = require('random-words');

function callRandomWord() {
  let allWords = randomWords(500);
  // console.log(randomWords);
  let longWords = allWords.find(item => item.length > 7)
  return longWords;
}

router.get('/', (req, res) => {
  res.send(callRandomWord());
})

module.exports = router;