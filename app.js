/***_ Game Function rules:_**

1.  Player must guess a number between a min and max
2.  Player gets a certain amount of guesses
3.  Notify player of guesses remainiing
4.  Notify the player of the correct answer if he loose
5.  Let player choose to play again
*/

//  Game Values:

let minNo = 1;
let maxNo = 10;
let guessesLeft = 3;
let winningNum = 2;
// getRandomWinningNumber();
/* a function will generate a random no between 1 and 10 but for the moment we are keeping it fixed at 2 */

// UI Elements:
let uiGame = document.querySelector("#game");
let uiMinNo = document.querySelector(".min-num");
let uiMaxNo = document.querySelector(".max-num");

let uiGuessBtn = document.querySelector("#guess-btn");
let uiGuessInput = document.querySelector("#guess-input");
let uiMessage = document.querySelector(".message");



// Assign UI min and Max Elements
uiMinNo.textContent = minNo;
uiMaxNo.textContent = maxNo;

// Liten for event guess
uiGuessBtn.addEventListener("click",

    function () {
        let guess = parseInt(uiGuessInput.value)
        console.log(typeof (guess))

        // validate

    })