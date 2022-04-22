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
const resultDisplay = document.querySelector('.result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardWon = [];

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

function checkMatch() {
    const cards = document.querySelectorAll('img');    
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        resultDisplay
        cardWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry try again!!');
    }

    resultDisplay.textContent = cardWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardWon.length == CardArray.length/2) {
        resultDisplay.textContent = 'Congratulation you found them all!!'
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

createBoard()
