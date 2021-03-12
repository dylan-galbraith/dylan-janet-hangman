const express = require("express");
const app = express();
const cors = require("cors");
const randomWord = require('./routes/randomWord');

app.use(cors());

app.use(express.json());

app.use('/random', randomWord);

app.listen(8080, ()=>{
  console.log("Server running on port 8080");
})