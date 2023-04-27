import renderFilteredCards from './renderFilteredCards.js';

const container = document.querySelector('.card_container');
const filterArr = async (
    dataArray,
    filterByValue,
    priorityValue,
    statusValue
) => {
    let filteredArr = await dataArray.filter(
        ({ name, description, doctor }) => {
            return (
                name?.toLowerCase().includes(filterByValue.toLowerCase()) ||
                description
                    ?.toLowerCase()
                    .includes(filterByValue.toLowerCase()) ||
                doctor?.toLowerCase().includes(filterByValue.toLowerCase())
            );
        }
    );

    const filterByPrior = filteredArr.filter(el => {
        const { priority } = el;
        if (priorityValue === 'All') {
            return true;
        } else if (priorityValue !== 'All' && priorityValue === priority) {
            return true;
        } else {
            return false;
        }
    });

    const filterByStatus = filterByPrior.filter(el => {
        const { status } = el;
        if (statusValue === 'Status') {
            return true;
        } else if (statusValue !== 'Status' && statusValue === status) {
            return true;
        } else {
            return false;
        }
    });

    if (filteredArr.length !== 0) {
        container.innerHTML = '';

        renderFilteredCards(filterByStatus);

        return filteredArr;
    } else {
        container.innerHTML = `<h2>No results found</h2>`;
        return filteredArr;
    }
};

export default filterArr;
