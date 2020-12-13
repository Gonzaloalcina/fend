//require hidden key
const dotenv = require("dotenv");
dotenv.config();

// fetch for functions
const fetch = require('node-fetch');

// store data from UI with event listeners and variables
const submitBtn = document.getElementById('generate');



// main function with event listener
const theBtnIsWorking = function(e) {
    e.preventDefault;
    submitBtn.addEventListener('submit', theUserTrip);
};

// secundary function with the trip process (postData route)
export function theUserTrip() {
    console.log('hello developer!');
};

// geonames function
export const geoCity = async () => {

};

// getWeather function
export const weather = async () => {

};

// update UI function
export const updateUI = async () => {

};

// post data to server function
export const postRoute = async () => {

};

export { theBtnIsWorking };

