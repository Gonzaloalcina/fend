//import { response } from "express";

import fetch from "node-fetch";

//require hidden key
//const dotenv = require("dotenv");
//dotenv.config();

// fetch for functions
//const fetch = require('node-fetch');

const info = {};

// store data from UI with event listeners and variables
const submitBtn = document.getElementById('generate');

// api keys info
const geoUrlBase = 'http://api.geonames.org/searchJSON?q=';
const geoApi = 'username=gonzalo_alcina';
const weatherUrlBase = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
const weatherUrlHist = 'https://api.weatherbit.io/v2.0/history/daily?lat=';
const weatherApi = '99fd3b8b3a6b48bfa070bc449cfe43ae';
const pixabayUrlBase = 'https://pixabay.com/api/?key=';
const pixabayApi = '19494922-8d701f04ab531f84f25a03fd5';
const newsURLBase = 'http://newsapi.org/v2/everything?q=';
const newsApi = '23dd9d3144a74019b4781707a9efd15d';
const ticketUrlBase = 'https://app.ticketmaster.com/discovery/v2/events.json?size=1';
const ticketApi = 'X6sxpBqX8uh0ftHD11Lp4JPiyvmYw9WD';

// event listener to start the app
submitBtn.addEventListener('click', theUserTrip);

// main function with the trip process, starts in functions.js (postData route)
function theUserTrip(e) {
    e.preventDefault();
    console.log('hello developer');

    info['cityFrom'] = document.getElementById('from').value;
    info['cityTo'] = document.getElementById('to').value;
    info['dateDep'] = document.getElementById('date-departure').value;

    try {
        geoCity(info['cityTo'])
        .then((userTripInfo)=> {
                const cityToLat = userTripInfo.geonames[0].lat;
                const citytoLong = userTripInfo.geonames[0].lng;
            return weather(cityToLat, citytoLong, info['dateDep']);
        })
        .then((weatherInfo) => {
            info['temp'] = weatherInfo['data'][0]['temp'];
            info['cond'] = weatherInfo['data'][0]['weather']['description'];
            return image(info['cityTo']);
        })
        .then((imageData) => {
            if (imageData['hits'].length > 0) {
                info['img'] = imageData['hits'][0]['webformatURL'];
            }
            return news(info['cityTo']);   
        })
        .then((newsData) => {
            info['newsTitle'] = newsData['articles'][0]['title'];
            info['newsDesc'] = newsData['articles'][0]['description'];
            info['newsImg'] = newsData['articles'][0]['urlToImage'];
            info['newsUrl'] = newsData['articles'][0]['url'];
            
            return tickets(info['cityTo'],info['dateDep']);
        })
        .then((eventsData) => {
            info['eventName'] = eventsData._embedded.events[0].name;
            info['eventTickets'] = eventsData._embedded.events[0].url;
            info['eventDate'] = eventsData._embedded.events[0].dates.start.localDate;
            info['eventImg'] = eventsData._embedded.events[0].images[0].url;
            info['eventVenue'] = eventsData._embedded.events[0]._embedded.venues[0].name;
            return postRoute(info);
        })
        .then((finalData) => {
            updateUI(finalData);
        })          
    } catch (error) {
        console.log('error', error);
    }
};

// geonames function
async function geoCity (to) {
    const response = await fetch(`${geoUrlBase}${to}&maxRows=10&${geoApi}`);
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
};

// getWeather function
async function weather (cityToLat, cityToLong, cityToDate) {
    const response = await fetch(`${weatherUrlBase}${cityToLat}&lon=${cityToLong}&start_date=${cityToDate}&key=${weatherApi}`);
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
};

// pixabay function
async function image (e) {
    const response = await fetch(`${pixabayUrlBase}${pixabayApi}&q=${e}+city&image_type=photo`);
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
};

// news function
async function news(e) {
    const response = await fetch(`${newsURLBase}${e}&language=en&sortBy=popularity&apiKey=${newsApi}`);
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

// ticketmaster function
async function tickets(city, date) {
    const response = await fetch(`${ticketUrlBase}&city=${city}&startDateTime=${date}T00:00:00Z&sort=relevance,asc&apikey=${ticketApi}`);
    try {
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

// post data to server function
async function postRoute (info) {
    const resp = await fetch('http://localhost:8000/postData', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    });
    try {
        console.log(info);
        return await resp.json();
    } catch (error) {
        console.log('error', error);
    }
};

// update UI function
async function updateUI (finalData) {
    // store elements from the DOM
    // trip info
    let UIImg = document.getElementById('trip-img');
    let UIFrom = document.getElementById('trip-from');
    let UIDest = document.getElementById('trip-dest');
    let UIDate = document.getElementById('trip-date');
    let UIDays = document.getElementById('trip-days');
    // trip weather
    let UIWeather = document.getElementById('trip-weather');
    // trip news
    let UINewsTitle = document.getElementById('trip-news_title');
    let UINewsDesc = document.getElementById('trip-news_desc');
    let UINewsImg = document.getElementById('trip-news_img');
    let UINewsUrl = document.getElementById('trip-news_url');
    // trip events
    let UIEventImg = document.getElementById('trip-event_img');
    let UIEventDate = document.getElementById('trip-event_date');
    let UIEventName = document.getElementById('trip-event_name');
    let UIEventVenue = document.getElementById('trip-event_venue');
    let UIEventTickets = document.getElementById('trip-event_tickets');


    // update with dynamic content
    UIImg.innerHTML = `<img src="${finalData.img}" alt="City"></img>`; 
    UIFrom.innerHTML = finalData.cityFrom;
    UIDest.innerHTML = finalData.cityTo;
    UIDate.innerHTML = finalData.dateDep;
    UIWeather.innerHTML = finalData.temp;
    UINewsTitle.innerHTML = finalData.newsTitle;
    UINewsDesc.innerHTML = finalData.newsDesc;
    UINewsImg.innerHTML = `<img src="${finalData.newsImg}" alt="News Photo"></img>`;
    UINewsUrl.innerHTML = `<a href="${finalData.newsUrl}" target="_blank">Read more</a>"`;
    UIEventImg.innerHTML = `<img src="${finalData.eventImg}" alt="Event"></img>`;
    UIEventDate.innerHTML = finalData.eventDate;
    UIEventName.innerHTML = finalData.eventName;
    UIEventVenue.innerHTML = finalData.eventVenue;
    UIEventTickets.innerHTML = `<a href="${finalData.eventTickets}" target="_blank">Buy tickets</a>`;
    // Conditions
    // Days
};

export {
    theUserTrip
}



