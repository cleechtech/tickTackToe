var current = 'X';
var movesMade = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var sum = function(arr){
	return arr.reduce(function(a,b){
		return a + b;
	}, 0)
};

var checkForWin = function(movesArray, letter){
	var result = {
		isWinner: false,
		winner: null
	};

	var col1 = [], col2 = [], col3 = [];
	movesArray.forEach(function(row, i){
		// check horizontal win
		var rowTotal = sum(row);
		console.log('row ' + i + ': ' + rowTotal);
		if(rowTotal == 3){
			result.isWinner = true;
		}

		if(i == 0)
			col1.push(movesArray[0][i]);

		if(i == 1)
			col2.push(movesArray[1][i]);

		if(i == 2)
			col3.push(movesArray[2][i]);

	});

	if(Math.abs(sum(col1)) == 3 || Math.abs(sum(col2)) == 3 || Math.abs(sum(col3)) == 3){
		result.isWinner = true;
	}

	if(result.isWinner)
		result.winner = letter;

	return result;
};

window.onload = function() {
	
	var tds = Array.prototype.slice.call(document.getElementsByTagName('td'));

	tds.forEach(function(td){
		td.addEventListener('click', function(e){
			var result = checkForWin(movesMade, current);

			if(e.target.innerHTML !== ''){
				return;
			}

			if(!result.isWinner){
				var column = e.target.cellIndex;
				var row = parseInt(e.target.parentNode.id);

				current = (current == 'X')? 'O' : 'X';

				if(current === 'X')
					movesMade[row][column] = 1;
				else
					movesMade[row][column] = -1;

				td.innerHTML = current;
			} else {
				console.log('Game is over!');
				console.log(result);
			}

		});
	});

};
  // what functions need to run at the initial load of the window? 
  // Consider what event listeners you will possibly need. 
  // Do you want to add markers by clicking? 
  // Do you want to have a button to reset the board? 
  // These will need 'click' handlers. 
  // Are there any other operations that happen at the same time? 
  // Are any of these the same as when a game is reset using the 'Reset' button? 
  // Try to be efficient with your code!