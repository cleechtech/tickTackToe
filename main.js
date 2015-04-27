var current = 'X';



var checkForWin = function(){
  // this will probably be the most involved function in this repo. 
  // Before you start writing code, consider a strategy in pseudocode 
  //that makes sense. If you can't follow the logic in plain English 
  // you will not be able to translate it into working code.
  return false;
};

window.onload = function() {

	var tds = Array.prototype.slice.call(document.getElementsByTagName('td'));

	tds.forEach(function(td){
		td.addEventListener('click', function(e){
			if(!checkForWin()){

				current = (current == 'X')? 'O' : 'X';
				td.innerHTML = current;
			} else {
				console.log('Game is over!')
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