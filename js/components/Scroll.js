import {Validator} from './Validator.js';
class Scroll {
    
    static headerScroll(selector) {
        if(!Validator.isString(selector)) {
            return false;
        }

        const DOM = document.querySelector(selector);


        if(!Validator.isValidSelector(DOM)) {
            return false;
        }

        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if(window.pageYOffset > 50) {
                DOM.classList.add('header--fixed');
            }else {
                DOM.classList.remove('header--fixed');
            }
        });
    }

}

export {Scroll}