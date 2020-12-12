// /* Global Variables */
// const baseUrl = 'http://.api.geonames.org/searchJSON?q=';
// const apiKey = `&maxRows=1&fuzzy=0.6&username=${process.env.geonamesapiKey}`;

// // Create a new date instance dynamically with JS
// let d = new Date();
// //let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// let newDate = d.toLocaleString('en-US', { month: 'long', day: 'numeric', year:'numeric'});

// document.getElementById('generate').addEventListener('click', action);

// export function action(e){
//     const destCity = document.getElementById('city').value;
//     const depDate = document.getElementById('date-departure').value;
//     console.log(newDate);
 
//     getTemp(baseUrl,destCity, apiKey)
//     .then(function (data){
//          if(String(data.cod) === '404'){
//             alert('Wrong zip code, try again!');
//         } else {
//             postData('http://localhost:8000/addData', { date: newDate, temp: data.main.temp, feel: depDate})
//             .then(function(){
//             //User Interface
//             updateUI()
//         })}  
//     })
// }

// //Async GET
// export const getTemp = async (baseUrl, apiKey) => {
//     const response = await fetch(baseUrl+apiKey);
//     console.log(response);
//     try {
//         const data = await response.json();
//         console.log(data);
//         console.log('ok get');
//         return data;
//     }
//     catch (error) {
//         console.log('error', error);
//     }
// }

// //Async POST
// export const postData = async (url = '', data = {}) => {
//     const postRequest = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     try {
//         console.log('ok post');
//         const newData = await postRequest.json();
//         console.log(newData, 'ok post vel');
//         return newData;
//     }
//     catch(error){
//         console.log('error', error);
//     }
// }

// //User Interface 
// export const updateUI = async () => {
//     const request = await fetch('http://localhost:8000/getData');
//     try {
//         const allData = await request.json();
//         console.log('Updating UI');
//         document.getElementById('date').innerHTML = allData.date;
//         document.getElementById('temp').innerHTML = `${allData.temp}°`;
//         document.getElementById('content').innerHTML = allData.feel;
//     }
//     catch(error) {
//         console.log('error, error');
//     }
// }

export function theBtnIsWorking(event) {
    event.preventDefault()
    console.log('I\'m connected');
    const city = document.getElementById('city').value;
    console.log(`The city is ${city}`);
    const departureDate = document.getElementById('date-departure').value;
    const returnDate = document.getElementById('date-return').value;
    console.log(`The dates are ${departureDate} and ${returnDate}`);
}


