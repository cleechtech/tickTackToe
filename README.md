###Tic-Tac-Toe

Everyone knows how to play this game for a reason. It's simple enough to learn when you're 4 years old, and you were probably tired of playing it before you turned 5. The rules are easy:

  * The 3 x 3 board starts off blank
  * The players markers are designated by __X__ and __O__
  * Either player can start by marking any square
  * Play continues in turn until:
    * One of the players wins by connecting a line of three of their markers
    * The game is a draw if all squares are filled without a winner

##Your Mission
There are starter files for you in the `tictactoe` folder. Using HTML, CSS and native JavaScript methods, create a Tic-Tac-Toe game with the following features:
  * Show a 3 x 3 grid for the board.
    * You can hardcode this in HTML several different ways, or you could create the markup programatically in JavaScript and write it into the DOM.
    * Use any styling that you choose to dress it up.
    * Consider how you can keep track of which squares are empty and which have been played. You may want to think about adding a unique attribute to each square as an identifier.
  * Allow a click event on an empty square to insert a players marker.
    * Start with whichever marker you like.
    * Automatically alternate markers.
    * Do not allow a marker to be changed once a square is played.
    * Consider how you can keep track of which squares have been played by each player.
      * You may be able to re-purpose the unique square identifiers that were discussed in the previous section.
  * Automatically detect a winner or a tie.
    * Announce the winner or tie.
    * Do not allow any further board selections after a win or tie.
  * Add a __Reset__ button that 
    * clears the board
    * Resets any variables for a new game
    * You should not have to reload the web page to begin a new game

###Extra-Credit
Add the following features, or dream up some of your own
  * Add styling that renders the player markers in different colors.
  * Add a "Wins" counter that keeps track of __X__ wins, __O__ wins and Draws.
  * Style your board using CSS, image files or other stuff to make your UI the best.