var el = document.getElementsByClassName('square');
var xplays, oplays, moves, winner;

var wins = [['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','4','8'], ['6','4','2']];


var marker = function() {
  return moves % 2 === 0 ? "X" : "O";
};

var clearBoard = function () {
  for(var i=0; i<el.length; i++) {
    el[i].innerHTML="";
  }
  xplays = [];
  oplays = [];
  moves = 0;
  winner = false;
  announce.innerHTML = 'Tic-Tac-Toe';
};

var checkForWin = function(){
  for (var i = 0; i < wins.length; i++){
    if (xplays.indexOf(wins[i][0]) !== -1 && xplays.indexOf(wins[i][1]) !== -1 && xplays.indexOf(wins[i][2]) !== -1){
      announce.innerHTML = 'X Wins!';
      winner = true;
    }else if (oplays.indexOf(wins[i][0]) !== -1 && oplays.indexOf(wins[i][1]) !== -1 && oplays.indexOf(wins[i][2]) !== -1){
      announce.innerHTML = 'O Wins!';
      winner = true;
    }else if(moves === 9){
      announce.innerHTML = "It's a Draw!";
    }
  }
};

window.onload = function() {
  for (var i=0;i<el.length; i++) {
    el[i].onclick = function(evt){
      if (! winner && !this.innerHTML) {
        var play = marker();
        var currentSquare = (evt.target.id);
        this.innerHTML= play;
        moves++;
        play === 'X' ? xplays.push(currentSquare) : oplays.push(currentSquare);
        checkForWin();
      }
    };
  };

  var resetBtn = document.getElementById('reset');
  resetBtn.onclick = function(){
    clearBoard()
  };

  clearBoard();
  var announce = document.getElementById('announce');
};