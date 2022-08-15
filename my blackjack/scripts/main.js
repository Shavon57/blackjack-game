
// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {

  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };

  switch (card.rank) {
    case 1:
      card.rank = 'Ace'; // card.rank accesses the card object and rank key
      break; // exits the code when the condition is met

    case 11:
      card.rank = 'Jack';
      break; // exits the code when the condition is met

    case 12:
    card.rank = 'Queen';
    break; // exits the code when the condition is met

    case 13:
    card.rank = 'King';
    break; // exits the code when the condition is met
  
    default:
      break;
  };

  deck.push(card);

};

for (let suit of suits) { // outter loop 1 time at a time - for a total of 4 times

  for (let rank of ranks) { // inner loop 13 times at a time - for a total of 52 times

    makeDeck(rank, suit);

  };
};

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
};

// @TODO1 Deal the initial cards
// Deal 2 cards to dealer and player
function dealCards(playerType){

  let dealer, player;

  if(playerType === 'dealer'){


    console.log('this is dealCards for the dealer function')// view the cards dealt

  }

  else { // player card dealing code


    console.log('this is dealCards for the player function')// view the cards dealt
  }

};

// call function for testing only
dealCards('player')


// @TODO2 hitMe function to deal cards to player after the initial deal
// based on the "Hit Me" button


// @TODO3 Dealer Stand Logic based on Stand Button



// @TODO4 Count the cards and the points per player
// showDelerPoints, showPlayerPoints



// TODO5 Decide the winner and Reset the game



// Event listeners and HTML related code



console.log(deck);
