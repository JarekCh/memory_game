/* app.js */

const CardArray = [
    {
        name: 'fries',
        Image: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        Image: 'images/cheesburger.png'
    },    {
        name: 'hotdog',
        Image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milshake',
        img: 'images/milshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        Image: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        Image: 'images/cheesburger.png'
    },    {
        name: 'hotdog',
        Image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milshake',
        img: 'images/milshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


CardArray.sort(() => 0.5 - Math.random())

console.log(CardArray)