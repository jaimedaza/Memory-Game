/*
 * Create a list that holds all of your cards
 */

 const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16"];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 // Shuffles the cards using the provided "shuffle" function
 document.addEventListener('DOMContentLoaded', shuffle(cards));

//Loops through each card and create its HTML and adds each card's HTML to the page
 const deck = document.querySelector('.deck');

 for(i = 0; i < cards.length; i++){
 	if(cards[i]==='card1'){
 		const card = '<li class="card"><i class="fa fa-diamond"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card2'){
 		const card = '<li class="card"><i class="fa fa-diamond"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card3'){
 		const card = '<li class="card"><i class="fa fa-paper-plane-o"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card4'){
 		const card = '<li class="card"><i class="fa fa-paper-plane-o"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card5'){
 		const card = '<li class="card"><i class="fa fa-anchor"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card6'){
 		const card = '<li class="card"><i class="fa fa-anchor"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card7'){
 		const card = '<li class="card"><i class="fa fa-bolt"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card8'){
 		const card = '<li class="card"><i class="fa fa-bolt"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card9'){
 		const card = '<li class="card"><i class="fa fa-cube"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card10'){
 		const card = '<li class="card"><i class="fa fa-cube"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card11'){
 		const card = '<li class="card"><i class="fa fa-leaf"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card12'){
 		const card = '<li class="card"><i class="fa fa-leaf"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card13'){
 		const card = '<li class="card"><i class="fa fa-bicycle"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card14'){
 		const card = '<li class="card"><i class="fa fa-bicycle"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else if(cards[i]==='card15'){
 		const card = '<li class="card"><i class="fa fa-bomb"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	else{
 		const card = '<li class="card"><i class="fa fa-bomb"></i></li>';
 	    deck.insertAdjacentHTML('beforeend', card);
 	}
 	 	
 };

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

for(i = 0; i < cards.length; i++){

}
 const selectCard = document.querySelector('.card');
 selectCard.addEventListener('click', function(){
 	cardSymbol(selectCard);

 });

// Function that flips the card

 function cardSymbol(card) {
 	//const listOfClasses = card.classList;
 	card.classList.add('open', 'show');
 	//console.log(listOfClasses);
 };


 //Restart the game
 const restartButton = document.querySelector('.restart');
 restartButton.addEventListener('click', function(){
 	location.reload();
 });
