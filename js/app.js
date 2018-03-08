/*
 * Create a list that holds all of your cards
 */

const cards = [
  "fa-diamond",
  "fa-diamond",
  "fa-anchor",
  "fa-anchor",
  "fa-bolt",
  "fa-bolt",
  "fa-cube",
  "fa-cube",
  "fa-leaf",
  "fa-leaf",
  "fa-bicycle",
  "fa-bicycle",
  "fa-bomb",
  "fa-bomb",
  "fa-paper-plane-o",
  "fa-paper-plane-o"
];

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
timer.addEventListener("secondsUpdated", function(e) {
  document.querySelector(
    "#basicUsage"
  ).innerHTML = timer.getTimeValues().toString();
});

// Shuffles the cards using the provided "shuffle" function

document.addEventListener("DOMContentLoaded", shuffle(cards));

//FUNCTION TO CREATE CARDS

const deck = document.querySelector(".deck");

function createCard(x) {
  const cardLi = document.createElement("li");
  const cardI = document.createElement("i");
  cardLi.classList.add("card");
  cardI.classList.add("fa");
  cardI.classList.add(x);
  cardLi.appendChild(cardI);
  deck.appendChild(cardLi);
  cardLi.addEventListener("click", function(event) {
    cardClick();
    if (openCards.length > 0 && cardClicked === openCards[0]) {
      cardClick();
    } else {
      showCard(cardLi);
      if (openCards.length === 2) {
        checkCard();
      } else if (openCards.length > 2) {
        checkCard2();
      }
    }
  });
}

//Loops through each card and create its HTML and adds each card's HTML to the page

for (i = 0; i < cards.length; i++) {
  createCard(cards[i]);
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

//FUNCTIONS

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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
  if (openCards.length === 0) {
    card.classList.add("open", "show");
    openCards.push(card);
  } else if (openCards.length === 1) {
    card.classList.add("open", "show");
    openCards.push(card);
  } else {
    openCards.push(card);
  }
}

// Function to check the cards

function checkCard() {
  if (openCards[0].firstChild.className === openCards[1].firstChild.className) {
    //openCards.push(card);
    openCards[0].classList.add("match");
    openCards[1].classList.add("match");
    openCards[0].classList.remove("open", "show");
    openCards[1].classList.remove("open", "show");
    removeOpenCards();
    updateMoves();
    checkWin();
  } else if (
    openCards[0].firstChild.className !== openCards[1].firstChild.className
  ) {
    openCards[0].classList.add("noMatch");
    openCards[1].classList.add("noMatch");
    setTimeout(hideCards, 800);
    updateMoves();
  } else {
    return;
  }
}

// Function to prevent an increase in the move count when clicking a third card while there are two open cards on the board

function checkCard2() {
  openCards[0].classList.add("noMatch");
  openCards[1].classList.add("noMatch");
  setTimeout(hideCards2, 800);
}

//Function to hide no matched cards

function hideCards() {
  if (openCards.length === 2) {
    openCards[0].classList.remove("open", "show");
    openCards[1].classList.remove("open", "show");
    openCards[0].classList.remove("noMatch");
    openCards[1].classList.remove("noMatch");
    removeOpenCards();
  } else {
    return;
  }
}

// function to hide and remove cards when there are unopened cards in the Opencards array

function hideCards2() {
  if (openCards.length > 2) {
    openCards[0].classList.remove("open", "show");
    openCards[1].classList.remove("open", "show");
    openCards[0].classList.remove("noMatch");
    openCards[1].classList.remove("noMatch");
    removeOpenCards();
  } else {
    return;
  }
}

//Function to clear openCards Array

function removeOpenCards() {
  openCards = [];
}

// Function to increase the move count

function updateMoves() {
  moves += 1;
  const move = document.querySelector(".moves");
  move.innerHTML = moves;
  if (moves === 16) {
    removeStar();
    starRating = 2;
  } else if (moves === 25) {
    removeStar();
    starRating = 1;
  }
}

// Function used to remove stars from the star rating

function removeStar() {
  const star = document.querySelector(".stars");
  const starChild = star.firstElementChild;
  star.removeChild(starChild);
}

// Function to check if the player has won

function checkWin() {
  matchFound += 1;
  if (matchFound == 8) {
    const message = document.getElementById("winnerPopup");
    const totalMove = document.getElementById("totalMoves");
    const totalStar = document.getElementById("totalStars");
    const time = document.getElementById("totalTime");
    const playAgain = document.getElementById("playAgainButton");
    totalMove.innerHTML = moves;
    totalTime.innerHTML = timer.getTimeValues().toString();
    totalStar.innerHTML = starRating;
    playAgain.addEventListener("click", function() {
      location.reload();
    });
    message.style.display = "block";
    timer.pause();
  }
}

// Function for the cards click events

function cardClick() {
  if (event.target.nodeName == "LI") {
    // Card area is clicked
    cardClicked = event.target;
  } else if (event.target.nodeName == "I") {
    // card icon is clicked
    cardClicked = event.target.parentElement;
  } else {
    return; // Empty deck area clicked
  }
  if (cardClicked === openCards[0]) {
    return;
  }
}

//Restart the game

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function() {
  location.reload();
});