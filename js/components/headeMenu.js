import {Validator} from './Validator.js';
function headerMenu(selector) {
    //input validate
    if(!Validator.isString(selector)) {
        return false
    }

    const DOM = document.querySelector(selector);


    if(!Validator.isValidSelector(selector)) {
        return false
    }

    DOM.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.classList.toggle('active');

        const headerNavbarSelector = document .querySelector('.header .navbar__right');

        if(!Validator.isValidSelector(headerNavbarSelector)) {
           return false;
        }

        headerNavbarSelector.classList.toggle('open');

        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                DOM.classList.remove('active');
                headerNavbarSelector.classList.remove('open');
            }
        });
    });


}

export {headerMenu}