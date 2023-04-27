import checkAndFilterCard from './checkAndFilterCards.js';
let renderFilteredCards = array => {
    array.forEach(element => {
        checkAndFilterCard(element);
    });
};

export default renderFilteredCards;
