// Star Wars Pseudocode
// 1. User chooses fighter to play with.
// 2. Chosen fighter moves to back of the line up
// 3. User chooses emeny to fight
// 4. Left over fighters move to back of defender area
// 5. Chosen enemy moves to the defender area
// 6. Chosen fighter attacks and counter attacks
//     Counter attack takes away 1 HP
//     Attack takes away 2 HP    
// 7. Emeny attacks
//     Attack takes away 2 HP
// 8. User wins when emeny's HP is zero.
// 9. User loses when users's HP is zero.
// 10. We take away from the score when User defeats emenies

let enemyHealth = 150;
let playerHealth = 150;

// Vanilla JS
// function reset () {
//     gameState = true
//     compChoice = compGuess()
//     console.log(compChoice)
//     guessesLeft = 10
//     guessedLetters =[]
//     document.querySelector('#message').innerHTML = 'Guess what letter I am thinking of?'
//     document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
//     document.querySelector('#wins').innerHTML = '' + wins
//     document.querySelector('#losses').innerHTML = '' + losses
//     document.querySelector('#guesses').innerHTML = guessedLetters.toString()

// }

// function wins () {
//     wins++
//     gameState = false
//     document.querySelector('#message').innerHTML = `You Win! Congratualations!
//     The letter was : ${compChoice}!
//     Press Enter key to continue...:`
//     document.querySelector('#wins').innerHTML = '' + wins

// }

// function losses (letter) {
//     losses++
//     gameState = false
//     document.querySelector('#message').innerHTML = `You Lose!
//     You guessed: ${letter}, but the correct answer was ${compChoice}!
//     Press Enter key to continue...:`
//     document.querySelector('#losses').innerHTML = '' + losses
//     document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
// }

// function wrong () {
//     document.querySelector('#message').innerHTML = 'Wrong! Keep Trying!'
//     document.querySelector('#guessesLeft').innerHTML = '' + guessesLeft
// }

// reset()

// Use click to lower HP for emeny and player (rotate enemy pictures and fight them as a whole)
$("attack-button").on("click", function() {
    enemyHealth--;

});

$("counter-button").on("click", function() {
    enemyHealth--;

});


