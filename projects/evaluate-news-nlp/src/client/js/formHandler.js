
const { default: fetch } = require("node-fetch");

const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');

//Main function
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
    .then((data) => updateUI(data));       
  }

}

//Function to send the data
const postData = async(url = '') => {
  const response = await fetch('http://localhost:8081/article', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
       'Content-Type': 'text/plain',
    },
    body: url,
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error);
  }
}

//Update UI with collected data
function updateUI(data) {
  console.log(data)
  polarity.innerHTML = "Polarity: " + polarityText(data.score_tag);
  confidence.innerHTML = `Confidence: ${data.confidence}`;
  subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
}

//Function to rewrite the polarity score
function polarityText(score) {
  let e;
  switch(score) {
    case "P+":
      e = "STRONG POSITIVE";
    break;
    case "P":
      e = "POSITIVE";
    break;
    case "NEU":
      e = "NEUTRAL";
    break;
    case "N":
      e = "NEGATIVE";
    break;
    case "N+":
      e = "STRONG POSITIVE";
    break;
    default:
      e = "NO SENTIMENT";
  }
  return e;
};


export { handleSubmit, polarityText };



