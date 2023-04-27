import checkResStatus from '../function/checkStatus.js';
import getRequest from './getRequest.js';
import renderSearchFilters from '../function/renderFilters.js';
import visitsArray from '../index.js';
const userLogin = async (email, password) => {
    const token = await fetch(
        'https://ajax.test-danit.com/api/v2/cards/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: `${email}`, password: `${password}` })
        }
    ).then(res => checkResStatus(res));
    if (token) {
        localStorage.setItem('Authorization', `Bearer ${token}`);
        document.querySelector('.login__modal--background').remove();
        getRequest();
        renderSearchFilters();
        if (visitsArray.length === 0) {
            document.querySelector(
                '.card_container'
            ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
        }
    } else {
        document.querySelector('.login__error')?.remove();
        document.querySelector('.login__modal--form').insertAdjacentHTML(
            'beforeend',
            `
    <div class="login__error" style="color:red">Incorrect username or password</div>
    `
        );
    }
};

export default userLogin;
