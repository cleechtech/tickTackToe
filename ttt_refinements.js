
$(document).ready(function() {

	var gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
	var playersTurn = true;
	var $centerSquare = $('.ttt-square')[4];


	var summarize = function(arr) {
		var acc = 0;
		arr.forEach(function(current, ind, arr) {
			acc += current;
		});
		return acc;
	}

	var computerCanWin = function() {
		console.log('computerCanWin() called');
		console.log('gameBoard = ', gameBoard);
		var nb = gameBoard;
		
		// ROWS
		for (var i = 0; i < 3; i++){
			// Begin calcualtion to determine horizontal winner
			// If any horizontal row sums to 2 or greater = win by "O." -2 or less = win by "X."
			if (nb[i][0]+nb[i][1]+nb[i][2] === -2) {
				for(var k = 0; k < 3; k++) {
					if(nb[i][k] == 0) return [i,k]; 
				}
			} else if (nb[i][0]+nb[i][1]+nb[i][2] === -3) {
				return 'computer';
			}
		}

		// COLS
		for (var x = 0; x <3; x++){
			if (nb[0][x]+nb[1][x]+nb[2][x] === -2) {
				for(var l = 0; l < 3; l++) {
					if(nb[l][x] == 0) return [l,x]; 
				}
			} else if(nb[0][x]+nb[1][x]+nb[2][x] === -3) {
				return 'computer';
			}
		}

		// DIAGNAL DOWN
		if (nb[0][0]+nb[1][1]+nb[2][2] === -2) {
			for(var w = 0; w < 3; w++) {
				if(nb[w][w] == 0) return [w,w]; 
			}
		} else if(nb[0][0]+nb[1][1]+nb[2][2] === -3) {
			return 'computer'
		}

		// DIAGNAL UP
		if (nb[0][2]+nb[1][1]+nb[2][0] === -3) {
			var t = 2
			for(var z = 0; z < 3; z++) {
				if(nb[z][t] == 0) return [z,t]; 
				t--;
			}
		} else if (nb[0][2]+nb[1][1]+nb[2][0] === -3) {
			return 'computer';
		}
	}

	var playerCanWin = function() {
		console.log('computerCanWin')
		var nb = gameBoard;
		
		// ROWS
		for (var i = 0; i < 3; i++){
			if (nb[i][0]+nb[i][1]+nb[i][2] === 2) {
				for(var k = 0; k < 3; k++) {
					if(nb[i][k] == 0) return [i,k]; 
				}
			} else if (nb[i][0]+nb[i][1]+nb[i][2] === 3) {
				return 'player';
			}
		}

		// COLS
		for (var x = 0; x <3; x++){
			if (nb[0][x]+nb[1][x]+nb[2][x] === 2) {
				for(var l = 0; l < 3; l++) {
					if(nb[l][x] == 0) return [l,x]; 
				}
			} else if (nb[0][x]+nb[1][x]+nb[2][x] === 2) {
				return 'player';
			}
		}

		// DIAGNAL DOWN
		if (nb[0][0]+nb[1][1]+nb[2][2] === 2) {
			for(var w = 0; w < 3; w++) {
				if(nb[w][w] == 0) return [w,w]; 
			}
		} else if (nb[0][0]+nb[1][1]+nb[2][2] === 2) {
			return 'player';
		}

		// DIAGNAL UP
		if (nb[0][2]+nb[1][1]+nb[2][0] === 2) {
			var t = 2
			for(var z = 0; z < 3; z++) {
				if(nb[z][t] == 0) return [z,t]; 
				t--;
			}
		} else if (nb[0][2]+nb[1][1]+nb[2][0] === 2) {
			return 'player'
		}
	}

	var findBestMove = function() {
		console.log('findBestMove() called');
	}

	var computersTurn = function() {
		console.log('computersTurn() called');
		var nextPos =[], whichRow, whichCol;

		$('.status').fadeOut('slow');


		//test for win end the game
		//$('.status').text // display who won
		//$('.status').fadeIn('slow');
		//$(.play-btn).fadeIn('slow');


		// is center occupied if not take it
		if(gameBoard[1][1] === 0) {
			gameBoard[1][1] = -1;
			$($('.ttt-square span')[4]).fadeOut(100, function(){
	 			$(this).text('O').fadeIn(600);
	 		});

		// if the player did not choose middle
		} else {

			console.log('else');

			var computerCanWin = computerCanWin();
			var playerCanWin = playerCanWin();


			if(computerCanWin === 'computer'){
				$('.status').text('Computer wins');
			} else if (playerCanWin === 'player') {
				$('.status').text('Players wins');
			} else if(computerCanWin) {
			
				nextPos = computerCanWin();
				whichRow = nextPos[0] + 1;
				whichCol = nextPos[1] + 1;

				gameBoard[nextPos[0]][nextPos[1]] = -1;

				$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
		 			$(this).text('O').fadeIn(600);
		 		});
	 		//if player can win
			} else if(playerCanWin) {
				console.log('playerCanWin at ',playerCanWin());
				nextPos = playerCanWin();
				whichRow = nextPos[0] + 1;
				whichCol = nextPos[1] + 1;
				gameBoard[nextPos[0]][nextPos[1]] = -1;

				$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
		 			$(this).text('O').fadeIn(600);
		 		});

			} else {
				// pickARandomCorner
				var corners = {
					'00': gameBoard[0][0],
					'02': gameBoard[0][2],
					'20': gameBoard[2][0],
					'22': gameBoard[2][2]
				}

				var availableCorners = [];

				for (var i in corners) {
					if(corners[i] === 0) {
						availableCorners.push(i);
					}
				}

				console.log('availableCorners = ', availableCorners)
				var whichCorner = availableCorners[Math.floor(Math.random()*availableCorners.length)];
				console.log('whichCorner = ', whichCorner)
				nextPos = whichCorner.split('');

				whichRow = parseInt(nextPos[0]) + 1;
				whichCol = parseInt(nextPos[1]) + 1;
				gameBoard[nextPos[0]][nextPos[1]] = -1;

				$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
		 			$(this).text('O').fadeIn(600);
		 		});

			}

			// none of those pick a random spot

			playersTurn = true;
			// is there  a potential win if so take it
			// does player have potential win if so block
		}






		}







	// 	 else if(computerCanWin()) {
			
	// 		nextPos = computerCanWin();
	// 		whichRow = nextPos[0] + 1;
	// 		whichCol = nextPos[1] + 1;

	// 		gameBoard[nextPos[0]][nextPos[1]] = -1;

	// 		$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
	//  			$(this).text('O').fadeIn(600);
	//  		});
 // 		//if player can win
	// 	} else if(playerCanWin()) {
	// 		console.log('playerCanWin at ',playerCanWin());
	// 		nextPos = playerCanWin();
	// 		whichRow = nextPos[0] + 1;
	// 		whichCol = nextPos[1] + 1;
	// 		gameBoard[nextPos[0]][nextPos[1]] = -1;

	// 		$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
	//  			$(this).text('O').fadeIn(600);
	//  		});

	// 	} else {
	// 		// pickARandomCorner
	// 		var corners = {
	// 			'00': gameBoard[0][0],
	// 			'02': gameBoard[0][2],
	// 			'20': gameBoard[2][0],
	// 			'22': gameBoard[2][2]
	// 		}

	// 		var availableCorners = [];

	// 		for (var i in corners) {
	// 			if(corners[i] === 0) {
	// 				availableCorners.push(i);
	// 			}
	// 		}

	// 		console.log('availableCorners = ', availableCorners)
	// 		var whichCorner = availableCorners[Math.floor(Math.random()*availableCorners.length)];
	// 		console.log('whichCorner = ', whichCorner)
	// 		nextPos = whichCorner.split('');

	// 		whichRow = parseInt(nextPos[0]) + 1;
	// 		whichCol = parseInt(nextPos[1]) + 1;
	// 		gameBoard[nextPos[0]][nextPos[1]] = -1;

	// 		$('[data-row="'+whichRow+'"][data-col="'+whichCol+'"]').fadeOut(100, function(){
	//  			$(this).text('O').fadeIn(600);
	//  		});

	// 	}

	// 	// none of those pick a random spot

	// 	playersTurn = true;
	// 	// is there  a potential win if so take it
	// 	// does player have potential win if so block
	// }

	$('.ttt-square').on('click', function() {
		if(playersTurn) {
		 	var row = $(this).data('row') - 1;
		 	var col = $(this).data('col') - 1;
		 	// only do something if square is empty
		 	if(gameBoard[row][col] === 0) {
		 		gameBoard[row][col] = 1;
		 		$(this).find('span').fadeOut(100, function(){
		 			$(this).text('X').fadeIn(600);
		 		});
		 		
		 		playersTurn = false;
		 		computersTurn();
		 	}
		}
	});




});