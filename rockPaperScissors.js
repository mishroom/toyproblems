/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(num) {
  let moves = ['rock', 'paper', 'scissors']
  let output = []
  let turn = []

  function nextMove(numLeft) {
    for (var i = 0; i < moves.length; i++) {
      turn.push(moves[i])
      if (turn.length === num) output.push(turn.slice())
      if (numLeft > 1) nextMove(numLeft - 1)
      turn.pop()
    }
  }
  nextMove(num)

  return output
}
