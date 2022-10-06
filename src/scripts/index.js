import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/card-list.js';
import './component/footer.js';
import cards from '../DATA.json' assert {type: 'json'};

console.log('Hello Coders! :)');
console.log(cards.restaurants);

const cardListElement = document.querySelector('card-list');
cardListElement.cards = cards;