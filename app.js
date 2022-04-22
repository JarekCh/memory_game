/* app.js */

const CardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]


CardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];
const cardsChosenIds = [];

function createBoard() {
    for (let i = 0; i < CardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.style.margin = '2px';
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);        
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img');    
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match');
        cards[]

    }
}

function flipCard() {
   const cardId = this.getAttribute('data-id');
   cardsChosen.push(CardArray[cardId].name);
   cardsChosenIds.push(cardId)
   this.setAttribute('src', CardArray[cardId].img)
   if (cardsChosen.length === 2) {
       setTimeout(checkMatch, 500);
   }
}
