# BT_JS_NumberGuesserGame

Intro: Concepts covered:

1. changing values and keeping track of those values
2. Working with the DOM
3. Structuring elements in your application
4. CSS framework - Skeleton

**_ Game Function rules:_**

1.  Player must guess a number between a min and max
2.  Player gets a certain amount of guesses
3.  Notify player of guesses remainiing
4.  Notify the player of the correct answer if he loose
5.  Let player choose to play again

**_Game Process Flow _**

1.  verify that the ser Input is valid through if condition (isNaN)||falls within the prescribed range
2.  elseif(No. matches ) Winning condition
3.  else(wrong No.)
4.  Nested if condition within step 3(Guessleft -=1, if count is 0, else state the no. of chances left)
