/*
 * Create a list that holds all of your cards
 */

 const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16"];

// List for holding open cards

openCards = [];

// Variable to keep count of the moves

let moves = 0;

// Variable to keep track of clicked card

let cardClicked;

// Variable to keep count of the matches found

let matchFound = 0;

// Variable to keep track of star rating

let starRating = 3;

// Creates the timer - timer from https://github.com/albert-gonzalez/easytimer.js/

var timer = new Timer();
timer.addEventListener('secondsUpdated', function (e) {
	document.querySelector('#basicUsage').innerHTML = timer.getTimeValues().toString();    
});

 // Shuffles the cards using the provided "shuffle" function

 document.addEventListener('DOMContentLoaded', shuffle(cards));

//Loops through each card and create its HTML and adds each card's HTML to the page

 const deck = document.querySelector('.deck');

 for(i = 0; i < cards.length; i++){
 	if(cards[i]==='card1'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-diamond');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 			
 		}); 		
 	}
 	else if(cards[i]==='card2'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-diamond');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 			
 		}); 		
 	}
 	else if(cards[i]==='card3'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-paper-plane-o');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		}); 		
 	}
 	else if(cards[i]==='card4'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-paper-plane-o');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		}); 		
 	}
 	else if(cards[i]==='card5'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-anchor');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card6'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-anchor');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card7'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bolt');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card8'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bolt');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card9'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-cube');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card10'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-cube');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card11'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-leaf');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card12'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-leaf');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 	
 		});
 	}
 	else if(cards[i]==='card13'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bicycle');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 				
 		});
 	}
 	else if(cards[i]==='card14'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bicycle');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			    }
			} 			 	
 		});
 	}
 	else if(cards[i]==='card15'){
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bomb');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
			cardClick();
			if (openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{
				showCard(cardLi);
				if(openCards.length === 2){
					checkCard();
				}
			} 				
 		}); 		
 	}
 	else{
 		const cardLi = document.createElement('li');
 		const cardI = document.createElement('i'); 		
		cardLi.classList.add('card');
		cardI.classList.add('fa');
		cardI.classList.add('fa-bomb');		
		cardLi.appendChild(cardI);
		deck.appendChild(cardLi);
		cardLi.addEventListener('click', function(event){
		    cardClick();			
			if(openCards.length > 0 && cardClicked === openCards[0]){
				cardClick();
			}
			else{				
				showCard(cardLi);
 			    if(openCards.length === 2){
 				checkCard();
 			  }
			}			
 	    }); 	 	
    }
};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //FUNCTIONS

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Function that flips the card

 function showCard(card) {
 	timer.start();
 	if(openCards.length === 0){
 		card.classList.add('open', 'show'); 		
 		openCards.push(card);
 			
 	}
 	else if(openCards.length === 1){
 		card.classList.add('open', 'show'); 		
 		openCards.push(card); 		
 	} 	
 };

 // Function to check the cards

 function checkCard(){ 	
 	if(openCards[0].firstChild.className == openCards[1].firstChild.className){
 		//openCards.push(card);
 		openCards[0].classList.add('match');
 		openCards[1].classList.add('match');
 		openCards[0].classList.remove('open','show');
 		openCards[1].classList.remove('open', 'show');
 		removeOpenCards();
 		updateMoves();
 		checkWin();
 	}
 	else {
 		openCards[0].classList.add('noMatch');
 		openCards[1].classList.add('noMatch');
 		setTimeout(hideCards, 1000);
 		updateMoves(); 	    
 	}
 };

 //Function to hide no matched cards

 function hideCards(){ 		
 		openCards[0].classList.remove('open', 'show');
 		openCards[1].classList.remove('open', 'show');
 		openCards[0].classList.remove('noMatch');
 		openCards[1].classList.remove('noMatch');
 		removeOpenCards();
 }

 //Function to clear openCards Array

 function removeOpenCards(){
 	openCards = [];
 }

 // Function to increase the move count

 function updateMoves(){
 	moves += 1;
 	const move = document.querySelector('.moves');
 	move.innerHTML = moves;
 	if(moves === 16){
 		removeStar();
 		starRating = 2;
 	}
 	else if(moves === 25){
 		removeStar();
 		starRating = 1;
 	}
 }

// Function used to remove stars from the star rating

 function removeStar(){
 	const star = document.querySelector('.stars');
 	const starChild = star.firstElementChild;
 	star.removeChild(starChild);
 }


// Function to check if the player has won

function checkWin() {
    matchFound += 1;
    if (matchFound == 8) {
    	const message = document.getElementById('winnerPopup');
		const totalMove = document.getElementById('totalMoves');
		const totalStar = document.getElementById('totalStars')
		const time = document.getElementById('totalTime');
		const playAgain = document.getElementById('playAgainButton');
		totalMove.innerHTML = moves;
		totalTime.innerHTML = timer.getTimeValues().toString();
		totalStar.innerHTML = starRating;
		playAgain.addEventListener('click', function(){location.reload();});
		message.style.display = 'block';
		timer.pause();        
    }
}

// Function for the cards click events

 function cardClick(){ 	
   if(event.target.nodeName == "LI"){ // Card area is clicked
     cardClicked = event.target;
    } else if(event.target.nodeName == "I"){ // card icon is clicked
        cardClicked = event.target.parentElement;
    } else {
        return; // Empty deck area clicked
    }
    if(cardClicked === openCards[0]){              
      return;
    }
}


 //Restart the game

 const restartButton = document.querySelector('.restart');
 restartButton.addEventListener('click', function(){
 	location.reload();
 });



 
