/* Global Variables */
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '0d20ff942186c94d0f12c1bc0f393ab8';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', action);

function action(e){
    const postalCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    console.log(newDate);
    getTemperature(baseUrl,postalCode,apiKey)
    .then(function (data){
        postData('http://localhost:8000/addData', {temperature: data.main.temp, date: newDate, user_response: feelings})
    .then(function(){
        updateUI()
        })    
    })
}