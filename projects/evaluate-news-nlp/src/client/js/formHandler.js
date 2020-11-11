// const checkForUrl = require ('./urlChecker');
// const fetch = require('node-fetch');

const { default: fetch } = require("node-fetch");

// export function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('url').value;
    
//     //Client.checkForUrl(formText)

//     console.log("::: Form Submitted :::")

//     if (checkForUrl(formText)) {
//         console.log('the url is ok');

//         fetch('http://localhost:8081/article', {
//             method: 'POST',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-type': 'text/plain',
//             },
//             body: formText,
//         })
//         .then((res => res.json())
//         .then((res) => {
//             document.querySelector('#score').innerHTML = `Polarity Score: ${res.score_tag}`;
//             document.querySelector('#subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
//             document.querySelector('#confidence').innerHTML = `Confidence: ${res.irony}`;
//     })
// };

// const { checkForUrl } = require("./urlChecker");

// function handleSubmit(event) {
//   event.preventDefault();

//   let formText = document.getElementById("url").value;
//   console.log("::: Form Submitted :::");

//   if (checkForUrl(formText)) {
//     console.log("valid url");

//     fetch("http://localhost:8080/article", {
//       method: "POST",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "text/plain",
//       },
//       body: formText,
//     })
//       //.then((res) => res.json())
//       .then((res) => {
//         console.log("res ui", res);

//         document.querySelector("#score").innerHTML = `Polarity score: ${score(
//           res.score_tag
//         )}`;
//         document.querySelector(
//           "#subjectivity"
//         ).innerHTML = `Subjectivity: ${letterCase(res.subjectivity)}`;
//         document.querySelector(
//           "#confidence"
//         ).innerHTML = `Confidence: ${letterCase(res.confidence)}`;
//         document.querySelector("#irony").innerHTML = `Irony: ${letterCase(
//           res.irony
//         )}`;
//       });
//   } else {
//     console.log("invalid url");
//   }
// }

// const letterCase = (word) => {
//   return word.charAt(0) + word.slice(1).toLowerCase();
// };

// const score = (score_tag) => {
//   if (score_tag === "P+" || score_tag === "P") {
//     return "Positive";
//   } else if (score_tag === "N+" || score_tag === "N") {
//     return "Negative";
//   } else if (score_tag === "NEU") {
//     return "Neutral";
//   } else {
//     return "Non Sentimental";
//   }
// };

// export { handleSubmit, score };

const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');

function handleSubmit(event) {
  event.preventDefault()

  let formUrl = document.getElementById('url').value;
  
  console.log('Form submitted');

  if(Client.checkForUrl(formUrl)) {
    error.style.visibility = 'hidden';

    polarity.innerHTML = '';
    subjectivity.innerHTML = '';
    confidence.innerHTML = '';

    postData(formUrl)
      .then(updateUI(data)) 
        
      
  }

}

const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/article', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'url': url}),
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

function updateUI(data) {
  console.log(data)
  polarity.innerHTML = `Polarity: ${data.score_tag}`;
  confidence.innerHTML = `Confidence: ${data.confidence}`;
  subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
}

export { handleSubmit }



