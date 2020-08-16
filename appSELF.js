/***_ Game Function rules:_**

1.  Player must guess a number between a min and max
2.  Player gets a certain amount of guesses
3.  Notify player of guesses remainiing
4.  Notify the player of the correct answer if he loose
5.  Let player choose to play again
*/


//  Game Values:
let minNo = 1,
    maxNo = 10,
    guessesLeft = 3,
    winningNum = getRandomWinningNumber();
/* a function will generate a random no between 1 and 10 but for the moment we are keeping it fixed at 2 */

// UI Elements:
let uiGame = document.querySelector("#game"),
    uiMinNo = document.querySelector(".min-num"),
    uiMaxNo = document.querySelector(".max-num"),

    uiGuessBtn = document.querySelector("#guess-btn"),
    uiGuessInput = document.querySelector("#guess-input"),
    uiMessage = document.querySelector(".message");




// Assign UI min and Max Elements
uiMinNo.textContent = minNo;
uiMaxNo.textContent = maxNo;

// Liten for event guess
uiGuessBtn.addEventListener("click", playOne);




function getRandomWinningNumber() {

    let number = Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo;
    console.log(number)

    return number;

}



function playOne(e) {
    let userGuess = parseInt(uiGuessInput.value)
    /* PraseInt parses the userInput into number from its original "String" state*/
    console.log(typeof (userGuess))

    // Validate for a valid response
    if (isNaN(userGuess) || userGuess < minNo || userGuess > maxNo) {
        funcMessage(`You need to choose a number between ${minNo} and ${maxNo}`, "red")
    }

    // Check if won
    else if (userGuess === winningNum) {

        // Game Over --WON
        // Disable input - Stops from entering a new Number
        uiGuessInput.disabled = true;
        // changeborder color
        uiGuessInput.style.borderColor = "green"
        // Set message
        funcMessage(`Yay!!Congrats..You got it ..${winningNum} is correct!`, "green");



    } else {

        // wrong no;
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // game over - lost
            // Disable input
            uiGuessInput.disabled = true;
            // changeborder color
            uiGuessInput.style.borderColor = "red"
            // Set message
            funcMessage(`Game over, you lost. The correct number was ${winningNum}`, "red")


        } else {
            //  game continues - answer wrong

            // change border color
            uiGuessInput.style.borderColor = "red";

            // clear Input
            uiGuessInput.value = "";
            // Tell user its a wrong msg
            funcMessage(`${userGuess} is not correct, ${guessesLeft} guesses left`, "red")
        }
        // }




        // for (let i = 1; i < totalAttempts + 1; i++) {

        //     if (userGuess !== winningNum) {

        //         funcMessage(
        //             `You are Wrong!You have ${totalAttempts-i}
        //     attempts left`, "Red")
        //     } else {
        //         funcMessage(`Yay!!Congrats..You got it right in ${i}attempts!`, "green")
        //     }






    }


}




function funcMessage(msg, color) {
    uiMessage.textContent = msg;
    uiMessage.style.color = color;
}


// function playAgain() {
//     let userAns = confirm("Would you like to play again?");

//     if (userAns) {
//         playOne()
//     } else {
//         alert("Sad That you are leaving..Bye Bye!!");
//     }

// }