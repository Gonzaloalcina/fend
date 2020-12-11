// import main functions of the app.js
import {action} from './js/app'
import {getTemp} from './js/app'
import {postData} from '.js/app'
import {updateUI} from '.js/app'

//import styles
import './styles/style.scss'

alert('Welcome to my Travel App');
console.log("I'm working");

export {
    action,
    getTemp,
    postData,
    updateUI
}
