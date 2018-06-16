//create a list that holds all my clicked cards
let clickedCards = [];

//Logic test on evaluating card matching status
let evaluateMatch = function(card) {
  if (clickedCards.length === 0) {
    addOpenedCard(card);
  } else {
    let previousCard = clickedCards.pop();
    if (previousCard.firstElementChild.className === card.firstElementChild.className) {
        cardMatchTimeout(previousCard, card);
    } else {
        cardNotMatchTimeout(previousCard, card);
    }
  }
}
//Add a card to a opened card list
let addOpenedCard = function(card) {
  clickedCards.push(card);
}

//Timeout function when cards are matched
let cardMatchTimeout = function(previousCard, card) {
  setTimeout(function() {
    previousCard.className = "card match";
    card.className = "card match";
  }, 700);
}

//Timeout function when cards are not matched
let cardNotMatchTimeout = function(previousCard, card) {
  setTimeout(function() {
    previousCard.className = "card";
    card.className = "card";
  }, 700);
}

//Move counter variable
let moveCounter = 0;

//when a card is clicked, change class 'card' to 'card open'
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    if (card.className === 'card match' || card.className === 'card open show') {
      return;
    }
    card.className = "card open show";
    evaluateMatch(card);
    moveCounter ++;
    displayMoveCounter(moveCounter);
    moveCounterStar(moveCounter);
  });
})

//display moveCounter
let displayMoveCounter = function (moveCounter) {
  document.querySelector('.moves').innerHTML = moveCounter;
}

//evaluate move stars
let moveCounterStar = function (moveCounter) {
  if (moveCounter >= 16) {
    document.getElementById('three-star').setAttribute('style', 'display: none');
    console.log('helo');
  }
  if (moveCounter >= 32) {
    document.getElementById('two-star').setAttribute('style', 'display: none');
  }
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
