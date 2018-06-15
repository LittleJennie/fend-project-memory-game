//create a list that holds all my clicked cards
var clickedCards = [];
var openedCards = document.querySelectorAll('card open show');

//when a card is clicked, change class 'card' to 'card open'
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click', function(event) {
    if (card.className === 'card match' || card.className === 'card open show') {
      return;
    }
    card.className = "card open show";
    if (clickedCards.length === 0) {
      clickedCards.push(card);
      console.log(clickedCards);
    } else {
      let previousCard = clickedCards.pop();
      if (previousCard.firstElementChild.className === card.firstElementChild.className) {
          setTimeout(function() {
            previousCard.className = "card match";
            card.className = "card match";
          }, 700)
      } else {
        setTimeout(function() {
          previousCard.className = "card";
          card.className = "card";
        }, 700)
      }
    }
  })

})


//limit the list to 2 element and evaluate the matching status of the two
// if (clickedCards.length === 2) {
//   if (clickedCards[0] == clickedCards[1]) {
//     document.querySelectorAll('card open show').className = "card match";
//   } else {
//     document.querySelectorAll('card open show').className = "card";
//   }
// }




//when card is matched, change to 'card match', else cahnge to 'card'
// if (matchList[0] === matchList[1]) {
//   xxx.className = "card match";
// } else {
//   xxx.className = "card";
// }



/*
 * Create a list that holds all of your cards
 */


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
