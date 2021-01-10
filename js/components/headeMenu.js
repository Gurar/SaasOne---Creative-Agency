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

        const headerSelector = document.querySelector('.header');

        if(!Validator.isValidSelector(headerSelector)) {
            return false;
        }

        headerSelector.classList.toggle('header--heigth');

        const headerNavbarSelector = headerSelector .querySelector('.navbar__right');

        if(!Validator.isValidSelector(headerNavbarSelector)) {
           return false;
        }

        headerNavbarSelector.classList.toggle('open');

        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                DOM.classList.remove('active');
                headerSelector.classList.remove('header--heigth');
                headerNavbarSelector.classList.remove('open');
            }
        });
    });


}

export {headerMenu}