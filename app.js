let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guess;
let guesses = []
let previousGuesses = []

function playGame(){
    let userName = prompt("Enter your name")
    let correctMessage= "That's Correct " + userName 
    let lowerMessage = 'Sorry ' + userName + ' Guess Lower!'
    let higherMessage = 'Sorry ' + userName + ' Guess Higher!'

    do {
        guess = prompt("Pick a number between 1-100")
    } while (!checkGuess(guess))

        function checkGuess(guess) {
            guessCount ++
            guesses.push(guess)
            if (guess == secretNumber) {
                if(guessCount ==1){
                    previousGuesses[userName]= [guess]
                } else {
                    previousGuesses[userName].push(guess)
                }
                alert(correctMessage + ' It only took you ' + guessCount + " guesses!" + " Your previous guesses were " + guesses.join(',') + '!')           
                
                if (userName in previousGuesses) {
                    let previousGuessCount = previousGuesses[userName].length - 1;
                    if (guessCount < previousGuessCount) {
                        alert(`You beat your previous attempt by ${previousGuessCount - guessCount} fewer guesses!`);
                    } else if (guessCount > previousGuessCount) {
                        alert(`You did worse in your last game by ${guessCount - previousGuessCount} more guesses.`);
                    }
                  }
                  return true;
                
            
        }else if (guess > secretNumber) {
            alert (lowerMessage)
            return false;
        } else {
            alert (higherMessage)
            return false;
        }
    }
    let playAgain = prompt("Do you want to play again? (Yes or No)").toLowerCase();
    if (playAgain === "yes") {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        guessCount = 0;
        guesses = [];
        playGame();
    }
}
playGame();
