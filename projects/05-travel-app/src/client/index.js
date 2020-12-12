// import {action} from './js/app';
// import {getTemp} from './js/app';
// import {postData} from './js/app';
// import {updateUI} from './js/app';

// import main functions
import {theBtnIsWorking} from './js/app';

// import styles
import './styles/main.scss';

// final exporting
export {
    // action,
    // getTemp,
    // postData,
    // updateUI
    theBtnIsWorking
}

// event listeners

// event listener for the submit btn
const submitBtn = document.getElementById('generate');
submitBtn.addEventListener('click', theBtnIsWorking);