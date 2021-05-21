const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

const guessArray = require('./modules/guess.js');
const randomNum = require('./modules/random-num.js');

// let randomNumber = {
//   randomNum: randomNum(1, 25)
// };

// function randomNum(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }



// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.post('/guess', (req, res) =>{
console.log('ln18', req.body);
guessArray.push(req.body);
console.log('ln20', guessArray);

res.sendStatus(200);
})

app.get('/random-num', (req, res) =>{
  console.log('got to /random-num');
  res.send(randomNum);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


function compareNumbers(guessArray) {
  // this should compare the guessObj values to the random number
  // do thing based on comparison (append)
  // eventually animations "you win" type thing 
  console.log('random number', randomNum);
  let winners = [];
  for (let i = 0; i < guessArray.length; i++) {
// {

  //for (let guessObj of guessArray){
    if(guessArray[i].player1Guess == randomNum.randomNum){
        let winner = {
          name: 'player1',
        }
        console.log('should be winner object:', winner);
        winners.push(winner);
    }
  
    if(guessArray[i].player2Guess == randomNum.randomNum){
      let winner = {
        name: 'player2',
      }
      console.log('should be winner object:', winner);
      winners.push(winner);
  }
    if(guessArray[i].player3Guess == randomNum.randomNum){
      let winner = {
        name: 'player3',
      }
      console.log('should be winner object:', winner);
      winners.push(winner);
  }
  if(guessArray[i].player4Guess == randomNum.randomNum){
    let winner = {
      name: 'player4',
    }
    console.log('should be winner object:', winner);
    winners.push(winner);
  }
    // else {
    //   // console.log('why wont it work');
    //   // console.log('each guess', guessArray[i]);
    //   // console.log('randon num is', randomNum)
    // }
  }
  console.log('should be winners array', winners);
  
  return winners;
}

// let compare = compareNumbers(guessArray);

app.get('/winner', (req, res) =>{
  console.log('at /winner');
  console.log(compareNumbers(guessArray));
  
  res.send(compareNumbers(guessArray));
})

// set variables to the key values of guesses object

// console.log('ln64', compareNumbers(guessArray));
