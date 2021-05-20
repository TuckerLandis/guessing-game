$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // generateRand();

  // click listeners
  $('#submitGuesses').on('click', handleSubmit);
}

function handleSubmit(){
  console.log('button clicked');

  let guessesObject = {
    player1Guess: $('#player1In').val(),
    player2Guess: $('#player2In').val(),
    player3Guess: $('#player3In').val(),
    player4Guess: $('#player4In').val(),
  }
  console.log(guessesObject);
  
  handleCompare();

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
}

// function generateRand() {
//   console.log('Generating Number');

//     $.ajax({
//       url:'/random-num',
//       method: 'GET'
//     }).then(response => {
//           console.log(response);
  
//     })
// }

function handleCompare() {
  console.log('in handle compare');

  $.ajax({
    url: '/winner',
    method: 'GET'
  }).then(response => {
    console.log(response);
    
  }).catch(function (error){
    console.log('errorHandleCompare'); 
  })
  } // end handleCompare



  // get number to show up 


  