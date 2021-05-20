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

// app.get('/random-num', (req, res) =>{
//   console.log('got to /random-num');
//   res.send(randomNum);
// })



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


function compareNumbers() {
  // this should compare the guessObj values to the random number
  // do thing based on comparison (append)
  // eventually animations "you win" type thing
  let winners = [];
  for (let guessObj of guessArray){
    if(guessObj.player1Guess == randomNum){
        let winner = {
          name: 'player1',
        }
        winners.push(winner);
    }     
  }
  return winners;
}

let compare = compareNumbers();

app.get('/winner', (req, res) =>{
  console.log('at /winner');
  res.send(compare);
})

// set variables to the key values of guesses object

