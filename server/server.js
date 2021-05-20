const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const guessArray = require('./modules/guess.js');
const randomNum = require('./modules/random-num.js');

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.post('/guess', (req, res) =>{
console.log(req.body);
res.sendStatus(200);
})

app.get('/random-num', (req, res) =>{
  console.log('got to /random-num');
  res.send(randomNum);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
