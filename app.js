// var scores, roundScores, activePlayer, gamePlaying;

// init();

// document.querySelector('.btn-roll').addEventListener('click', function() {
//     if(gamePlaying) {

//           //1. Random number
//           var dice = Math.floor(Math.random() * 6) + 1;
      
//           //2. Display the result
//           var diceDOM = document.querySelector('.dice');
//           diceDOM.style.display = 'block';
//           diceDOM.src= 'dice' + dice + '.png';
          
//           //3. Update the round score IF the rolled number was NOT a 1
//           if (dice !== 1) {
//               //Add score
//               roundScores += dice;
//               document.querySelector('#current-' + activePlayer).textContent = roundScores;
//             } else {
//                 //Next Player
//                 nextPlayer();
//             }
//        };

// });

// document.querySelector('.btn-hold').addEventListener('click', function() {
//     if(gamePlaying) {
//          // Add CURRENT score to GLOBAL score
//          scores[activePlayer] += roundScores;
//          // Update the UI
//          document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
         
//          //Check if player won the game
//          if (scores[activePlayer] >= 100) {
//             console.log(gamePlaying);
//              document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//              document.querySelector('.dice').style.display = 'none';
//              //document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
//              //document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');
//              gamePlaying = false;
//          } else {
//              //Next player
//              nextPlayer();
//          }
//     }
// });

// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//  roundScores = 0;

//  document.getElementById('current-0').textContent = '0';
//  document.getElementById('current-1').textContent = '0';

//  document.querySelector('.player-0-panel').classList.toggle('active'); 
//  document.querySelector('.player-1-panel').classList.toggle('active');
//  console.log(activePlayer);
//  // document.querySelector('.player-0-panel').classList.remove('active');
//  // document.querySelector('.player-1-panel').classList.add('active');

//  document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//     scores = [0, 0];
//     activePlayer = 0;
//     roundScores = 0;
//     gamePlaying = true;

// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
// document.getElementById('name-0').textContent = 'Player 1';
// document.getElementById('name-1').textContent = 'Player 2';
// document.querySelector('.player-0-panel').classList.remove('winner');
// document.querySelector('.player-1-panel').classList.remove('winner');
// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.remove('active');
// document.querySelector('.player-0-panel').classList.add('active');
// };





//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;