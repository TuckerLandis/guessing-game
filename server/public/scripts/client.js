$(document).ready(handleReady);

function handleReady() {
  // console.log("jquery is loaded!")
  generateRand();
  // playAgain();
  // click listeners
  $('#submitGuesses').on('click', handleSubmit);
  $('#resetButton').on('click', '#playAgainButton', resetNumbers)
}

let clickCount = 0;

function resetNumbers(){
  generateRand();
  console.log('new random number??', generateRand());
}

function handleSubmit(){
  console.log('button clicked');

  clickCounter();

  let guessesObject = {
    player1Guess: $('#player1In').val(),
    player2Guess: $('#player2In').val(),
    player3Guess: $('#player3In').val(),
    player4Guess: $('#player4In').val(),
  }
  console.log(guessesObject);
  
   $.ajax({
     url: '/guess',
     method: 'POST',
     data: guessesObject //becomes req.body on the server
   }).then(response =>{
      console.log(response);
   })
     .catch(function (error) {
         console.log('error')
         alert('something went wrong with Post, try again')

})
handleCompare();
//getGuesses();
}
//so we can see what the random number is. comment out before done.
function generateRand() {
  console.log('Generating Number');

    $.ajax({
      url:'/random-num',
      method: 'GET'
    }).then(response => {
          console.log(response);
    })
}

function handleCompare() {
  console.log('in handle compare');
  $.ajax({
    url: '/winner',
    method: 'GET'
  }).then(response => {
    console.log('in handle compare', response);
    declareWinner(response);
    
  }).catch(function (error){
    console.log('errorHandleCompare'); 
  })

  } // end handleCompare

function declareWinner (response){

  let winners = '';
  for (let i = 0; i<response.length; i++){
    if (response[response.length-1].name == 'player1'){
      winners = 'player 1';
    }
    if (response[response.length-1].name == 'player2'){
      winners = 'player 2';
    }
    if (response[response.length-1].name == 'player3'){
      winners = 'player 3';
    }
    if (response[response.length-1].name == 'player4'){
      winners = 'player 4';
    }
  }

  console.log('declare winner', winners);
  $('#displayWinner').text(`${winners} is the winner!!`);
}
  // get number to show up 


  function clickCounter() {
    clickCount++;
    $('#guessCounter').text(`Total Guesses: ${clickCount}`)
  
  }

  // get guesshistory

  // function getGuesses() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/guess'
  //   }).then(function (response){
  //     console.log(response)
  //     //empty DOM
  //     $('.historyBodySection').empty();

  //     let comparison = [];

  //     for (let i = 0; i < response.length; i++) {
  //       if (response[i].player1Guess == randomNum) {
  //         comparison[i].player1Guess.push('Winner');
  //       } else if (response[i].player1Guess > randomNum) {
  //         comparison[i].push('Too High');
  //       } else if (response[i].player1Guess < randomNum) {
  //         comparison[i].push('Too Low');
  //       }
  //       if (response[i].player1Guess == randomNum) {
  //         comparison[i].player1Guess('Winner');
  //       } else if (response[i].player1Guess > randomNum) {
  //         comparison[i].push('Too High');
  //       } else if (response[i].player1Guess < randomNum) {
  //         comparison[i].push('Too Low');
  //       }
  //       if (response[i].player1Guess == randomNum) {
  //         comparison[i].player1Guess('Winner');
  //       } else if (response[i].player1Guess > randomNum) {
  //         comparison[i].push('Too High');
  //       } else if (response[i].player1Guess < randomNum) {
  //         comparison[i].push('Too Low');
  //       }
  //       if (response[i].player1Guess == randomNum) {
  //         comparison[i].player1Guess('Winner');
  //       } else if (response[i].player1Guess > randomNum) {
  //         comparison[i].push('Too High');
  //       } else if (response[i].player1Guess < randomNum) {
  //         comparison[i].push('Too Low');
  //       }

  //       $('.historyBodySection').append(
  //         `<tr>
  //         <td>${response[i].player1Guess}</td>
  //         <td></td>
  //         <td>${response[i].player2Guess}</td>
  //         <td></td>
  //         <td>${response[i].player3Guess}</td>
  //         <td></td>
  //         <td>${response[i].player4Guess}</td>
  //         <td></td>
  //         </tr>`
  //       )
  //     }
  //   })
  // }
  


  // function playAgain(){
  //   console.log('clicked play again');
  //   $('#resetButton').html(`
  //   <button id="playAgainButton">Play Again!<button>
  //   `)
  // }