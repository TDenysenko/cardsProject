import { openLoginModal, openLoginModalEdit } from './function/login.js';
import renderSearchFilters from './function/renderFilters.js';
import getRequest from './api/getRequest.js';

const logInBtn = document.querySelector('.header__logIn--btn');
const visitBtn = document.querySelector('.header__visit--btn');
logInBtn.addEventListener('click', openLoginModal);
visitBtn.addEventListener('click', openLoginModalEdit);
let visitsArray = [];

document.addEventListener('DOMContentLoaded', e => {
    e.defaultPrevented;

    if (localStorage.Authorization) {
        logInBtn.style.display = 'none';
        visitBtn.style.display = 'block';

        renderSearchFilters();
        getRequest();
        if (visitsArray.length === 0) {
            document.querySelector(
                '.card_container'
            ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
        }
    } else {
        return;
    }
});

export default visitsArray;
