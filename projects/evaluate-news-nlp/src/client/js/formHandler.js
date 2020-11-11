const checkForUrl = require ('./urlChecker');
const { default: fetch } = require("node-fetch");

const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById('subjectivity');
const confidence = document.getElementById('confidence');

function handleSubmit(event) {
  event.preventDefault()

  let formUrl = document.getElementById('url').value;
  
  console.log('Form submitted');

  if(checkForUrl(formUrl)) {
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



