// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let deck = [];
let playerHand = [];
let playerPoints = 0;
let dealerHand = [];
let dealerPoints = 0;

//event listeners
let dealButton = document.getElementById('#deal-button');
dealButton.addEventListener('click', dealCards)

let standButton = document.querySelector('#stand-button');
standButton.addEventListener('click', ()=>{

})

let hitButton = document.querySelector('#hit button');
hitButton.addEventListener('click', ()=>{

})


let playerhandContainer = document.getElementById('player-hand');
let dealerHandContainer = document.getElementById('dealer-hand');

function buildDeck(rank, suit) {


  const card = {
    rank: rank,
    suit: suit,
    image: rank > 1 || rank < 11 ? './images/${rank}_of_${suit}.png' :null,
    pointValue: rank > 10 ? 10 : rank,
  };

  switch (card.rank) {
    case 1:
      card.rank = 'ace'; // card.rank accesses the card object and rank key
      card.image = './images/ace_of_${suit}.png';
      break;// exits the code when the condition is met

    case 11:
      card.rank = 'jack';
      card.image = '.images/jack_of_${suit}.png';
      break; // exits the code when the condition is met

    case 12:
    card.rank = 'queen';
    card.image = "./images/queen_of_${suit}.png";
    break; // exits the code when the condition is met

    case 13:
    card.rank = 'king';
    card.image = "./images/king_of_${suit}.png";
    break; // exits the code when the condition is met
  
    default:
      break;
  };

  deck.push(card);

};

function buildSuits(suits, ranks){
  for (let suit of suits) { // outter loop 1 time at a time - for a total of 4 times

  for (let rank of ranks) { // inner loop 13 times at a time - for a total of 52 times

    buildDeck(rank, suit);
  };
  
  };
  shuffleArray(deck);
};



// shuffle the cards
function shuffleArray(deck) {
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
  };
};


// @TODO1 Deal the initial cards
// Deal 2 cards to dealer and player
function dealCards(playerType){

  buildSuits(suits, ranks);

//Deal 4  cards 1 at a time to player and dealer 
for(let i=0; i < 2; 1++){

letPlayerTempCard =  [], dealerTempCard = [];
    //push cards to player 1 at a time
    playerTempCard = deck.pop();
    if(letPlayerTempCard.rank === 'ace') {
        playerTempCard.pointValue = 11;
    }
  playerHand.push (playerTempCard);
 //append image to player
  playerHandContainer.innerHTML += '<img src=${playerHand[i].image} id=${playerHand[i].rank}_of_{playerHand[i].suit}>';
calculatePoints('player')

  //push cards to dealer 1 at a time
dealerTempCard = deck.pop();
if(dealerTempCard.rank === 'ace') {
  dealerTempCard.pointValue = 11;
};

//append mage to dealer
dealerHandContainer.innerHTML += '<img src=${dealerHand[i].image} id=${dealerHand[i].rank}_of_${dealerHand[i].suit}>';
calculatePoints('dealer')
  };

};

showPoints('player', playerPoints);
showPoints('deal', dealerPoints);

 //count points
function calculatePoints(playerType) {
  if(playerType === 'player'){
    playerPoints = playerPoints + playerHand[playerHand.length - 1].pointValue;
  }
  else if(playerType === 'dealer') {
    dealerPoints = dealerPoints + dealerHand[dealerHand.length - 1].pointValue;
  }
}
    console.log('this is dealCards for the dealer function')// view the cards dealt

  

   // player card dealing code

    console.log('this is dealCards for the player function')// view the cards dealt
  



//display points
function showPoints(playerType, points){
    if(playerType === 'player') 
      let playerPointsupdate = document.getElementById('player-points');
    playerPointsupdate.innerText = '${points} Points';
  }
else if (playerType === 'dealer') {
  let dealersPointsupdate = document.getElementById('dealer-points');
  dealerPointsupdate.innerText = '${points} Points';

}



// call function for testing only



// @TODO2 hitMe function to deal cards to player after the initial deal
// based on the "Hit Me" button


// @TODO3 Dealer Stand Logic based on Stand Button



// @TODO4 Count the cards and the points per player
// showDelerPoints, showPlayerPoints



// TODO5 Decide the winner and Reset the game



// Event listeners and HTML related code




